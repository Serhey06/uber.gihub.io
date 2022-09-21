const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "project_2"
        }
    });
});

gulp.task('styles',function() {
    return gulp.src("project_2/scss/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest("project_2/css"))
            .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('project_2/scss/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch("project_2/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));