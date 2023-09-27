const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // output path
        filename: 'bundle.js' // output filename
    },
    module: {
        rules: [
            {
                test: /\.css$/, // target file
                use: [
                    {
                        loader: 'style-loader' // inject CSS to DOM
                    },
                    {
                        loader: 'css-loader' // translate CSS to CommonJS
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};