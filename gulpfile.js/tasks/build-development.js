'use strict';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['fonts', 'images', 'svg-sprite'], ['sass', 'js', 'json', 'manifest', 'html'], cb);
});
