var gulp = require('gulp');
var responsive = require('gulp-responsive');
var compress = require('gulp-tinypng-compress');

gulp.task('png', function() {
  return gulp.src('./source/**/**/*.png')
    .pipe(responsive({
      '*.png': [{
        width: 1080,
        rename: { suffix: '-xxhdpi' },
      }, {
        width: 720,
        rename: { suffix: '-xhdpi' },
      }, {
        width: 540,
        rename: { suffix: '-hdpi' },
      }, {
        width: 360,
        rename: { suffix: '-mdpi' },
      }, {
        width: 270,
        rename: { suffix: '-ldpi' },
      }, {
        width: 478.8,
        rename: { suffix: '-tvdpi' },
      }, {
        rename: { suffix: '-xxxhdpi' }
	}]
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }))
	.pipe(compress({
		key: 'ujlOvH8ArTsjvk3JQRqH6zrMQLdecwrj'
	}))
    .pipe(gulp.dest('./dist'));
});




gulp.task('jpg', function() {
  return gulp.src('./source/**/**/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        width: 1080,
        rename: { suffix: '-xxhdpi' },
      }, {
        width: 720,
        rename: { suffix: '-xhdpi' },
      }, {
        width: 540,
        rename: { suffix: '-hdpi' },
      }, {
        width: 360,
        rename: { suffix: '-mdpi' },
      }, {
        width: 270,
        rename: { suffix: '-ldpi' },
      }, {
        width: 478.8,
        rename: { suffix: '-tvdpi' },
      }, {
        rename: { suffix: '-xxxhdpi' }
	}]
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }))
	.pipe(compress({
		key: 'ujlOvH8ArTsjvk3JQRqH6zrMQLdecwrj'
	}))
    .pipe(gulp.dest('./dist'));
});
