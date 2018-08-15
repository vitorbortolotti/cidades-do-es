const gulp    = require('gulp');
const sass    = require('gulp-sass');
const argv = require('minimist')(process.argv.slice(2));

const sassPath = {
    source: './public/assets/styles/style.scss',
    dest: './public/assets/styles'
};

gulp.task('resolve', sass_resolve);

gulp.task('watch', () => {
    sass_resolve();
    gulp.watch(sassPath.source, sass_resolve);
});

function sass_resolve() {
    return gulp.src(sassPath.source)
        .pipe(sass({ outputStyle: argv['development'] ? 'expanded' : 'compressed' }))
        .pipe(gulp.dest( sassPath.dest ))
}

