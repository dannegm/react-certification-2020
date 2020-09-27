const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

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
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './../public/index.html'),
        }),

        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
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

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    devtool: 'inline-source-map',
};
