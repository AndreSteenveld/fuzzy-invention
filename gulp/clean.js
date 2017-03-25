'use strict';

var gulp = require('gulp'),
  del = require('del');

// Empty the build dir.
gulp.task('clean', function () {
  del([global.paths.dist + '/*']);
  del([
      global.paths.build + "/**/*",
      "!" + global.paths.build + "/config.js",
      "!" + global.paths.build + "/lib"
  ])
});
