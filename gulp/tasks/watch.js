'use strict';

module.exports = function () {
	$.gulp.task('watch', function() {
		$.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
		$.gulp.watch('./source/*.html', $.gulp.series('html'));
		$.gulp.watch('./source/script/**/*.js', $.gulp.series('script'));
		$.gulp.watch('./source/img/**/*.*', $.gulp.series('img'));
		$.gulp.watch('./source/font/**/*.*', $.gulp.series('font'));
	});
};