const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const replace = require('gulp-replace')
const rename = require('gulp-rename')

const path = {
    src: {
        scss: 'src/**/*.scss',
        js: 'src/**/*.js',
        wxml: 'src/**/*.wxml',
        json: 'src/**/*.json'
    },
    components_src: [
        'src/**/*'
    ],
    components_example: 'example/components'
}

gulp.task('sass_compiler', ['component_cleaner'], () => {
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({
			'extname': '.wxss'
		}))
        .pipe(replace('.scss', '.wxss'))
        .pipe(gulp.dest(path.components_example))
})

gulp.task('component_carrier', ['sass_compiler'], () => {
    gulp.src([path.src.wxml, path.src.json, path.src.js])
        .pipe(gulp.dest(path.components_example))
})

gulp.task('component_cleaner', [], () => {
    return del(path.components_example)
})

gulp.task('default', ['component_carrier'], () => {
    let watcher = gulp.watch(path.components_src, [], ['component_carrier'])
    watcher.on('change', () => {
        console.log('changed')
    })
})