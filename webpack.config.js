var path = require("path");
var webpack = require("webpack")


module.exports = {
    devtool:'source-map',
    entry: ['bootstrap-loader', './index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
        publicPath: '/dist'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }

}