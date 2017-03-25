'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  nunjucks = require( "gulp-nunjucks-md" );

// HTML livereload.
gulp.task('html', function () {
  gulp.src(global.paths.html)
    .pipe( 
      nunjucks({
        path: [ global.paths.src ],
        data: {
          environment: "development"
        }
      })
    )
    .pipe(gulp.dest(global.paths.build))
    .pipe(connect.reload());
});
