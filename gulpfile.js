var gulp = require("gulp");
var watch = require("gulp-watch");
var umd = require("gulp-umd");
var gutil = require('gulp-util');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");


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
        .pipe(gulp.dest('./dist'))
        .pipe(uglify().on('error',gutil.log))
        .pipe(rename({suffix:".min"})) 
        .pipe(gulp.dest('./dist'));

})