const gulp = require('gulp');

/**
 * Definicion de rutas
*/
var paths = {
    scripts: {
        src: [
          './assets/app/*.js'
        ],
        dest: './assets/js'
    }
};

/**
 * JS Compilador
*/
function build_js(){
    const concat = require('gulp-concat');
    const uglify = require('gulp-uglify');

    return gulp.src(paths.scripts.src)
        .pipe( concat('main.min.js') )
        .pipe( uglify() )
        .pipe( gulp.dest(paths.scripts.dest) )
}

/**
 * Watch task: compilador automático de sass/css y js
*/
gulp.task('watch', () => {
    gulp.watch( paths.scripts.src, build_js );
});

gulp.task('build-js', () => {
    return build_js();
});