var gulp = require("gulp");
var watch = require("gulp-watch");
var umd = require("gulp-umd");
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
        }))
//        .pipe(uglify())
        .pipe(rename({suffix:".min"})) 
        .pipe(gulp.dest('./dist'));

})