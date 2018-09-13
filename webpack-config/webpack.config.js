const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.resolve(rootPath, 'src');
const assetPath = path.resolve(srcPath, 'assets');
const buildPath = path.resolve(rootPath, 'build');

module.exports = {
    entry: {
        index: path.resolve(srcPath, 'index'),
    },
    output: {
        filename: '[name]-[hash].js',
        path: buildPath,
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: [ srcPath ],
                use: 'babel-loader',
            },
            {
                test: /\.css/,
                include: [ srcPath ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
        ],
    },
    plugins: [
        new UglifyPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(assetPath, 'index.html'),
        }),
        new ExtractTextPlugin('index-[hash].css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3000,
        hot: true,
    },
};