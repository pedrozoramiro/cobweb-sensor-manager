var inject = require('gulp-inject');
var paths = ['./src/client/**/*.module.js',
             './src/client/**/*.js',
              './src/client/**/*.css'];
module.exports = function (gulp, callback) {
   var target = gulp.src('./src/client/index.html'); 
   var sources = gulp.src(paths, {read: false});
   return target.pipe(inject(sources)).pipe(gulp.dest('./src/client'));
};



 


