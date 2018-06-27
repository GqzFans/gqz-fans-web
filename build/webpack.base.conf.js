var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
var publicPaths = null;
var paths = null;
switch (process.env.NODE_ENV) {
    case 'production':
        publicPaths = config.build.assetsPublicPath;
        paths = config.build.assetsRoot;
        break;
    case 'devend':
        publicPaths = config.devend.assetsPublicPath;
        paths = config.devend.assetsRoot;
        break;
    default:
        publicPaths = config.dev.assetsPublicPath;
        paths = config.build.assetsRoot;
};

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: paths,
        filename: '[name].js',
        publicPath: publicPaths
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
            'views': resolve('src/views')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/xcms-common-plugins/src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1024,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
