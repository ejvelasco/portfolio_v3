const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');

gulp.task('jsx', () => {
  return (
    browserify('./public/jsx/components/app.jsx')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/build/'))
    .pipe(livereload())
  );
});

gulp.task('scss', () => {
  return gulp.src('./public/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/build/'))
    .pipe(livereload());
});

gulp.task('watch', () => { 
  livereload.listen();
  gulp.watch('./public/jsx/**/*.jsx', ['jsx', 'lint'],);
  gulp.watch('./public/scss/*.scss', ['scss']);
});

gulp.task('lint', () => {
    return gulp.src(['./public/jsx/**/*.jsx']) 
      .pipe(eslint())
      .pipe(eslint.format())
});

gulp.task('default', ['jsx','scss', 'watch', 'lint']);