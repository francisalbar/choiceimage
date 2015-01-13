var gulp = require('gulp');
var jpegtran = require('imagemin-jpegtran');
var pngquant = require('imagemin-pngquant');
var optipng = require('imagemin-optipng');
//var svgo = require('imagemin-svgo');
var imageResize = require('gulp-image-resize');
var argv = require('yargs')
  .default({
    'srcimage': 'images/**/*.{png,jpg,jpeg,gif}',
    'targetpath': 'build/images'
  })
  .argv;
var sizes = [320,480,800,1280,1600,2048];

gulp.task('default', function () {
  for(var i in sizes) {
    var size = sizes[i];
    gulp.src(argv.srcimage)
      .pipe(imageResize({
        width : size,
        upscale : false
      }))
      .pipe(pngquant({quality: '65-80', speed: 4}))
      .pipe(optipng({optimizationLevel: 3}))
      .pipe(jpegtran({ progressive: true })())
      //.pipe(svgo())
      .pipe(gulp.dest(argv.targetpath + '/' + size));
  }
});