'use strict';

var config = require('../config');
var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var backupGenerator = require('../lib/backup-generator');

gulp.task('backup-gen', ['build:production'], function() {
  return gulp.src([config.root.dest + '/**/*.html', '!' + config.root.dest + '/index.html'])
    .pipe(backupGenerator({
      root: config.root.dest,
      dest: config.root.src,
      // overwrite: true,
      // position: 10,
      // hideObjects: ['rollover', 'icon', 'edition'],
      errorIfJSException: true,
      quality: 75,
      streamType: 'jpg',
      renderDelay: 5000
    }))
    .on('error', handleErrors);
});
