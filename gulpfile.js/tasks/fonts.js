'use strict';

var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var config = require('../config');
var gulp = require('gulp');

gulp.task('fonts', function() {
  return gulp.src(config.tasks.fonts.src)
    .pipe(changed(config.tasks.fonts.dest))
    .pipe(gulpif('font-awesome.*', gulp.dest(config.tasks.fonts.dest + '/base/fonts')))
    .pipe(gulp.dest(config.tasks.fonts.dest))
    .pipe(browserSync.stream());
});
