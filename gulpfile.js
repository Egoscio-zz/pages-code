// gulpfile.js

var gulp = require('gulp')
var jade = require('gulp-jade')
var babel = require('gulp-babel')
var stylus = require('gulp-stylus')

var dest = '../egoscio.github.io'

gulp.task('default', ['compile'])

gulp.task('compile', ['assets', 'jade', 'babel', 'stylus'])

gulp.task('assets', () => {
  return gulp.src('src/assets/*')
    .pipe(gulp.dest(dest))
})

gulp.task('jade', () => {
  return gulp.src('src/jade/*.jade')
    .pipe(jade({ pretty: true, doctype: 'html' }))
    .pipe(gulp.dest(dest))
})

gulp.task('babel', () => {
  return gulp.src('src/babel/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(dest))
})

gulp.task('stylus', () => {
  return gulp.src('src/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest(dest))
})

gulp.task('watch', () => {
  gulp.watch('src/assets/*', ['assets'])
  gulp.watch('src/jade/*.jade', ['jade'])
  gulp.watch('src/babel/*.js', ['babel'])
  gulp.watch('src/stylus/*.styl', ['stylus'])
})
