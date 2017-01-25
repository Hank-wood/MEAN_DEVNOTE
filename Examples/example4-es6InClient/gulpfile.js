const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
	return gulp.src('./public/js/*.js')
		.pipe(babel({
			presets: ['es2015'],
			plugins: ['transform-runtime']
		}))
		.pipe(gulp.dest('./public/dist'));
});