'use strict';

module.exports = function () {
	$.gulp.task('html', function () {
		return $.gulp.src('./source/*.html')
		.pipe($.gulp.dest('./build'))
		.on('error', $.gp.notify.onError({
			title: 'html'
		}));
	});
	$.gulp.task('script', function () {
		return $.gulp.src('./source/script/**/*.js')
		.pipe($.gulp.dest('./build/assets/js'))
		.on('error', $.gp.notify.onError({
			title: 'script'
		}));
	});
	$.gulp.task('img', function () {
		return $.gulp.src('./source/img/**/*.*')
		.pipe($.gulp.dest('./build/assets/img'))
		.on('error', $.gp.notify.onError({
			title: 'img'
		}));
	});
	$.gulp.task('font', function () {
		return $.gulp.src('./source/font/**/*.*')
		.pipe($.gulp.dest('./build/assets/font'))
		.on('error', $.gp.notify.onError({
			title: 'font'
		}));
	});
}