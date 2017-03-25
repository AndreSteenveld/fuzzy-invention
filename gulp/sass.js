'use strict';

var 
  path = require( "path" ),
  gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  
  bourbon = require( "bourbon" ),
  neat    = require( "bourbon-neat" ),
  include_media = require( "include-media" );

function resolve_package_lib_dir( package_json_path ){

  var package_path = path.dirname( require.resolve( package_json_path ) ),
     package_json = require( package_json_path );
	 
  return [ path.join( package_path, package_json.directories.lib ) ];
	
}
  
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  includePaths: [ ]
	.concat( bourbon.includePaths )
	.concat( neat.includePaths )
	.concat([ include_media.includePath ])
	.concat( resolve_package_lib_dir( "normalize-scss/package.json" ) )
};

// Compile SASS with sourcemaps + livereload.
gulp.task('sass', function () {
  gulp.src(global.paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.css))
    .pipe(connect.reload());
});
