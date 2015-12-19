/**
 * Created by js on 12/19/15.
 */
"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


var Config = require('./gulpfile.config');
var config = new Config ();
var styles = config.vendors.css.concat(config.app.css);

var dev_folder = 'public';

gulp.task('index', function () {
    return gulp.src(config.app.index)
        .pipe(gulp.dest(dev_folder))
});

gulp.task('styles', function () {
    return gulp.src(config.vendors.css.concat(config.app.css))
        //.pipe(source)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dev_folder))
});

gulp.task('js', function () {
    return gulp.src(config.app.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dev_folder))
});

gulp.task('vendors-js', function () {
    return gulp.src(config.vendors.js)
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dev_folder))
});

gulp.task('watch', ['build'], function () {
    watch (config.app.js, function (){
        gulp.start('js');
    });

    watch (config.vendors.js, function (){
        gulp.start('vendors-js');
    });

    watch (config.app.index, function (){
        gulp.start('index');
    });

    watch (styles, function (){
        gulp.start('styles');
    });
});

gulp.task ('build', ['index', 'styles', 'vendors-js', 'js']);
gulp.task ('default', ['build']);