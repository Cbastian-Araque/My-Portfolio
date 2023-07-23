const gulp = require('gulp');

/**
 * Definicion de rutas
*/
var paths = {
    styles: {
        src: [
          './assets/sass/**/*.scss'
        ],
        dest: './assets/css'
    },
    scripts: {
        src: [
          './assets/js/**/*.js'
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
 * SASS-CSS Compilador
*/
function build_css(){
    const sass = require('gulp-sass')(require('sass'))
    const sourcemaps = require('gulp-sourcemaps')

    return gulp.src(paths.styles.src)
        .pipe( sass( {outputStyle: 'compressed'}).on('error', sass.logError) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest(paths.styles.dest) )
}

/**
 * Watch task: compilador automático de sass/css y js
*/
gulp.task('watch', () => {
    gulp.watch( paths.styles.src, build_css );
    gulp.watch( paths.scripts.src, build_js );
});

gulp.task('build-js', () => {
    return build_js();
});

gulp.task('build-css', () => {
    return build_css();
});

