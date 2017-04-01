const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src/');

module.exports = {
    devtool: 'eval-sourcemap',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        srcDir + '/index.jsx'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: srcDir,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        contentBase: srcDir,
        inline: true,
        hot: true,
        progress: true,
        noInfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: srcDir + '/index.html'
        })
    ]
};
