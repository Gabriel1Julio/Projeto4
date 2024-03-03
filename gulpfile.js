const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function CompilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'))
}

function ComprimeImagem() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = gulp.parallel(CompilaSass, ComprimeImagem);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(CompilaSass));
}