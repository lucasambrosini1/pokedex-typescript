const gulp = require('gulp');
const ts = require('gulp-typescript');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const webserver = require('gulp-webserver');
const clean = require('gulp-clean');
require('ts-node').register();

const paths = {
  src: {
    ts: ['src/**/*.ts', '!src/**/__tests__/**/*.ts'],
    css: 'src/**/*.css',
    html: '*.html',
  },
  dest: {
    js: 'dist/public/js',
    css: 'dist/public/css',
    html: 'dist',
  },
};

const compileTypescript = () => {
  const tsProject = ts.createProject('tsconfig.json');
  return gulp
    .src(paths.src.ts)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest.js));
};

const minifyCss = () => gulp
  .src(paths.src.css)
  .pipe(concat('app.css'))
  .pipe(cleanCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(paths.dest.css));

const minifyHtml = () => gulp
  .src(paths.src.html)
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest(paths.dest.html));

const cleanDist = () => gulp.src('dist', { allowEmpty: true, read: false })
  .pipe(clean());

const watch = () => {
  gulp.watch(paths.src.ts, compileTypescript);
  gulp.watch(paths.src.css, minifyCss);
  gulp.watch(paths.src.html, minifyHtml);
};

const startServer = () => gulp.src('public')
  .pipe(webserver({
    livereload: true,
    open: false,
  }));

exports.cleanDist = cleanDist;
exports.compileTypescript = compileTypescript;
exports.minifyCss = minifyCss;
exports.minifyHtml = minifyHtml;
exports.watch = watch;
exports.startServer = startServer;

exports.default = gulp.series(cleanDist, gulp.parallel(compileTypescript, minifyCss, minifyHtml),
  watch, startServer);
