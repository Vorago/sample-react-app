const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const targetDir = path.resolve(__dirname, 'target/');
const srcDir = path.resolve(__dirname, 'src/');

module.exports = {
    entry: [srcDir + '/index.jsx'],
    output: {
        path: targetDir,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            minimize: true,
            mangle: false
        }),
        new HtmlWebpackPlugin({
            template: srcDir + '/index.html'
        })
    ]
};
