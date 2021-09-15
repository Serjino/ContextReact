const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globals = require('./globals.js')

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'produciton';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

function setupDevtool() {
    if (IS_DEV) {
        return 'eval';
    }
    if (IS_PROD) {
        return false;
    }
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        // alias: {
        //     'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        // }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry:
        path.resolve(__dirname, './src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist/client'),
        filename: 'client.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:6]',
                            },
                        }
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: false,

                        }

                    }
                ],
            },
        ],
    },
    devtool: setupDevtool(),
    devServer: {
        compress: true,
        port: 9000,
        hot: true,   
        historyApiFallback: true,  
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/client/indexTemplate.html"),
        templateParameters: globals,
    }
    )],
};