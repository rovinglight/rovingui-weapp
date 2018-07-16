const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const minimist = require('minimist')
const gulpSequence = require('gulp-sequence')

const knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'dev' }
};
const options = minimist(process.argv.slice(2), knownOptions)

const path = {
    src: {
        all: 'src/**/*',
        scss: 'src/**/*.scss',
        js: 'src/**/*.js',
        wxml: 'src/**/*.wxml',
        json: 'src/**/*.json'
    },
    dev: 'example/components',
    production: 'dist/'
}

function runBuild (cb) {
    gulpSequence(
        'component_cleaner', 
        'sass_compiler', 
        'component_carrier',
        cb
    )((err) => {
        if (err) {
            console.log(err)
        }
    })
}

gulp.task('sass_compiler', [], () => {
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({
			'extname': '.wxss'
		}))
        .pipe(replace('.scss', '.wxss'))
        .pipe(gulp.dest(path[options.env]))
})

gulp.task('component_carrier', [], () => {
    gulp.src([path.src.wxml, path.src.json, path.src.js])
        .pipe(gulp.dest(path[options.env]))
})

gulp.task('component_cleaner', [], () => {
    return del(path[options.env])
})

gulp.task('default', [], () => {
    if (options.env === 'dev') {
        runBuild(() => {
            let watcher = gulp.watch(path.src.all, () => {
                runBuild()
            })
            watcher.on('change', () => {
                console.log('changed')
            })
        })
    } else if (options.env === 'production') {
        runBuild(() => {
            console.log('finish')
        })
    }
})