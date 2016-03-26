var gulp = require("gulp");
var watch = require("gulp-watch");
var umd = require("gulp-umd");
var gutil = require('gulp-util');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");
var banner = require('gulp-banner');
var pkg = require('./package.json');

var comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' * <%= pkg.repository.url %>\n' +
    ' * Copyright 2016, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n';
var min_comment =  '/*' +
    ' <%= pkg.name %> <%= pkg.version %> ' +
    ' <%= pkg.homepage %> ' +
    ' <%= pkg.repository.url %> ' +
    ' Copyright 2016, <%= pkg.author %> ' +
    '*/\n';

gulp.task('default',['build']);
gulp.task('watch',function(){
    gulp.watch('src/**/*',['build'])
})

gulp.task('build', function () {
    gulp.src('src/*.js')
        .pipe(umd({
            exports: function(file) {
                return 'Translater';
            },
            namespace: function(file) {
                return 'Translater';
            }
        }).on('error',gutil.log))
        .pipe(banner(comment, {
            pkg: pkg
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify().on('error',gutil.log))
        .pipe(banner(min_comment, {
            pkg: pkg
        }))
        .pipe(rename({suffix:".min"})) 
        .pipe(gulp.dest('./dist'));

})