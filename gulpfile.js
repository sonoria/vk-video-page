'use strict';


global.$ = {
	path: {
		task: require('./gulp/paths/tasks.js')
	},
	gulp: require('gulp'),
	del: require('del'),
	gp: require('gulp-load-plugins') (),
	browserSync: require('browser-sync').create()
};


$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});


$.gulp.task('default', $.gulp.series(
	'del',
	$.gulp.parallel(
		'sass',
		'html',
		'script',
		'img',
		'font'
		),
	$.gulp.parallel(
		'watch',
		'serve'
		)
	));

