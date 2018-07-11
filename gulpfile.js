const gulp = require('gulp')
const del = require('del')

const path = {
    components_src: [
        'components/***/*'
    ],
    components_example: 'example/components'
}

gulp.task('component_carrier', ['component_cleaner'], () => {
    gulp.src(path.components_src)
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