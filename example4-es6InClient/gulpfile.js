const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
	return gulp.src('./public/js/*.js')
		.pipe(babel({
			presets: ['es2015'],
			plugins: ['transform-runtime','transform-es2015-modules-umd']
		}))
		.pipe(gulp.dest('./public/dist'));
});