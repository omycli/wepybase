var $gulp = require('gulp');
var $sprite = require('gulp.spritesmith.x3');
var $base64 = require('gulp-base64');

$gulp.task('sprite', function() {
    return $gulp
        .src('slices/*.png')
        .pipe(
            $sprite({
                // 需要是全路径https://github.com/twolfson/gulp.spritesmith/issues/64
                retinaSrcFilter: ['slices/*@2x.png'],
                retinaImgName: 'sprite/imagesp-2x.png',
                retina3xSrcFilter: ['slices/*@3x.png'],
                retina3xImgName: 'sprite/imagesp-3x.png',
                imgName: 'sprite/imagesp.png',
                cssName: 'sprite/sprite.scss',
                cssFormat: 'css'
            })
        )
        .pipe($gulp.dest('./src/css/'));
});

$gulp.task('base64',['sprite'], function() {
    return $gulp
        .src('./src/css/sprite/sprite.scss')
        .pipe(
            $base64({
                baseDir: './src/css/sprite/',
                maxImageSize: 3*1024*1024,
                extensions: ['png']
            })
        )
        .pipe($gulp.dest('./src/css/sprite/'));
});

$gulp.task('default', ['sprite','base64']);
