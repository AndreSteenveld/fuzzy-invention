'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect');

// JavaScript livereload.
gulp.task('js', function () {
  gulp.src(global.paths.js)
    .pipe(gulp.dest(global.paths.build))
    .pipe(connect.reload());
});
