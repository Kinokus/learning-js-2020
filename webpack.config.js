const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

path = require('path')
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: './index.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@':path.resolve(__dirname,'src'),
            '@core':path.resolve(__dirname,'src/core')
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({
            filename:"bundle.[hash].css"
        }),
        new HtmlPlugin({
            template: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })


    ],
    // module: {
    //     test: /\.css$/i,
    //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
    // }

}