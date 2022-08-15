import gulp from 'gulp'

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import pkg from './package.json'

const sass = gulpSass(dartSass);

import uglify from 'gulp-uglify'
import babel from 'gulp-babel'
import browserify from 'browserify'
import autoprefixer from "gulp-autoprefixer"
import header from 'gulp-header'
import source from "vinyl-source-stream"
import sourcemaps from "gulp-sourcemaps"

const assetsPath = "../../assets"

const banner = [
    '/*',
    'Theme Name: Idem',
    '*/',
    '/*! ',
    '<%= package.name %> ',
    'v<%= package.version %> | ',
    '(c) ' + new Date().getFullYear() + ' <%= package.author %> |',
    ' <%= package.homepage %>',
    ' */',
    '\n'
].join('')

gulp.task('style', () => {
    return gulp.src('scss/style.scss')
        .pipe(
            sass({
                errorLogToConsole: true,
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(header(banner, {
            package: pkg
        }))
        .pipe(gulp.dest('../../'))
})

gulp.task('js', () => {
    return gulp.src(['js/src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .on('error', (err) => {
            console.log(err.toString())
        })
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js/dist'))
})

gulp.task('browserify', function () {
    return browserify({
        entries: 'js/dist/app.js',
        debug: true,
    }).bundle()
        .pipe(source('app.min.js'))
        .pipe(header(banner, {
            package: pkg
        }))
        .pipe(gulp.dest(`${assetsPath}/js`));
});

gulp.task('default', gulp.series('style', 'js', 'browserify', function () {
    gulp.watch('scss/**/*.scss', gulp.series('style'))
    gulp.watch('js/src/*.js', gulp.series('js', 'browserify'))
}))