const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function gulpTeste(cb) {
    console.log("Olá, mundo")
    cb()
}

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'))
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(images, styles);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}