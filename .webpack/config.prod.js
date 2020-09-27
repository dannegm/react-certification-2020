const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: path.join(__dirname, './../src/index.js'),

    output: {
        path: path.join(__dirname, './../build'),
        filename: `[name].min.js?${new Date().getTime()}`,
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['styled-components'],
                        },
                    },
                    'stylelint-custom-processor-loader',
                ],
            },
        ],
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public/',
                    to: './',
                },
            ],
        }),

        new HtmlWebPackPlugin({
            template: path.join(__dirname, './../public/index.html'),
        }),

        new webpack.DefinePlugin({ config: JSON.stringify(require('config')) }),
    ],

    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.join(__dirname, './../src/'),
            '@ui': path.join(__dirname, './../src/shared/ui/'),
        },
        modules: ['node_modules'],
    },
};
