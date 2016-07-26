var bowerFiles = require('main-bower-files'),
        inject = require('gulp-inject'),
        stylus = require('gulp-stylus'),
        es = require('event-stream');

var paths = ['./src/client/**/*.module.js',
             './src/client/**/*.js',
              './src/client/**/*.css'];
              
module.exports = function (gulp, callback) {
var cssFiles = gulp.src('./src/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./src/client'));
 
 var sorces = gulp.src(paths, {read: false});
 var target = gulp.src('./src/client/index.html'); 
 return   target.
            pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
            .pipe(inject(es.merge(cssFiles,sorces)))
            .pipe(gulp.dest('./src/client'));
};



 


