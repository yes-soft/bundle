var gulp = require('gulp'),
    fs = require("fs"),
    del = require('del'),
    concat = require('gulp-concat'), rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var inject = require('gulp-inject');
var annotate = require('gulp-ng-annotate');
var es = require('event-stream');
var path = require('path');

var dist = "./dist/";

gulp.task('clean', function (cb) {
    return del([
        dist
    ], cb);
});

gulp.task('scripts', function () {
    return gulp.src([
        'angular-ie8/ie8-shim.js',
        'angular-ie8/angular.js',
        'angular-ie8/angular-ie8-fix.js',
        'components/angular-animate/angular-animate.js',
        'components/angular-cookie/angular-cookie.js',
        'components/angular-resource/angular-resource.js',
        'components/angular-sanitize/angular-sanitize.js',
        'components/angular-touch/angular-touch.js',
        'components/angular-translate/angular-translate.js',
        'components/angular-ui-router/release/angular-ui-router.js',
        'components/ngstorage/ngStorage.js',
        'components/oclazyload/dist/oclazyload.js',
        'components/moment/min/moment-with-locales.js',
        'components/angular-moment/angular-moment.js'
    ])
        .pipe(concat('yes.bundle.js'))
        .pipe(gulp.dest(dist))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(dist));
});


gulp.task('default', ['scripts'],
    function () {
        console.log('done');
    });