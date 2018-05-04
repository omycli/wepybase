let prod = process.env.NODE_ENV === 'production';

module.exports = {
    eslint: true,
    wpyExt: '.wpy',
    compilers: {
        sass: {
            outputStyle: 'expanded'
        },
        babel: {
            sourceMap: true,
            presets: [
                'es2015',
                'stage-1'
            ],
            plugins: [
                'transform-export-extensions',
                'syntax-export-extensions'
            ]
        }
    }
};
if (prod) {

    delete module.exports.compilers.babel.sourcesMap;
    // 压缩sass
    module.exports.compilers['sass'] = {outputStyle: 'expanded'}

    // 压缩less
    module.exports.compilers['less'] = {
        compress: true
    };

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        imagemin: {
            filter: /\.(jpg|png|jpge)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
