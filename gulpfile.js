'use strict';

const gulp = require('gulp'),
    { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};

exports.buildStyles = buildStyles;

gulp.task('watch', function() {
    watch('./assets/scss/*.scss', buildStyles);
});
