var path = require("path");
var webpack = require("webpack")
var LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
    devtool: 'source-map',
    entry: ['bootstrap-loader', './index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    plugins: [
        new LiveReloadPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }

}