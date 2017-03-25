'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect');

// HTML livereload.
gulp.task('html', function () {
  gulp.src(global.paths.html)
    .pipe(gulp.dest(global.paths.build))
    .pipe(connect.reload());
});
