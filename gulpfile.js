const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const envify = require('envify/custom');

gulp.task('jsx', () => {
  return (
    browserify('./public/jsx/app.jsx')
    .transform('babelify', {presets: ['es2015', 'react']})
    .transform(envify({
      NODE_ENV: 'production'
    }))
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
  gulp.watch('./public/js/**/*.js', ['jsx'])
  gulp.watch('./public/jsx/**/*.jsx', ['jsx']);
  gulp.watch('./public/scss/*.scss', ['scss']);
});

gulp.task('default', ['jsx','scss', 'watch']);