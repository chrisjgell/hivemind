var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// task to run server
gulp.task('dev:server', function() {
  nodemon({
    script: 'bin/server.js',
    ext: 'js',
    ignore: ['public*', 'gulp*']
  });
});