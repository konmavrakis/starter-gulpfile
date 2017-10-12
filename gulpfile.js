let gulp = require('gulp'),
    //Gulp packages
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css');
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint');

    //Directories - modify to fit your app structure
    jsFiles = 'assets/js/*.js',
    jsDest = 'dist/scripts',
    stylesFiles = 'assets/css/*.css',
    stylesDest  = 'dist/styles',
    appURL = 'localhost:3000';

//Concat - Minify - Uglify JS
gulp.task('scripts', () => {
  return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify().on('error', util.log))
    .pipe(gulp.dest(jsDest));
});

//Minify Styles
gulp.task('styles', () => {
  return gulp.src(stylesFiles)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles'));
});

//Lint JS files
gulp.task('jslint', () => {
  return gulp.src('assets/js/*.js')
    .pipe(jshint({ linter: require('jshint').JSXHINT }))
   .pipe(jshint.reporter('default'));
});

//Compress Images
gulp.task('images', () => {
  return gulp.src('assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin({
      interlaced: true
    }))
    .pipe(gulp.dest('dist/images'));
});

//Livereload with BrowserSync
gulp.task('livereload', () => {
  connect.server({}, () => {
    browserSync({
      proxy: appURL
    });
  });
  gulp.watch('**/*.*').on('change', () =>  {
    browserSync.reload();
  });
});

//The default gulp task when running gulp in the cli
gulp.task('default', ['jslint', 'livereload']);
