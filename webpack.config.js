const path = require('path');
 
module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include: '/build/contracts/'
            },
            {
                test: /\.css/,
                use: [
                  'style-loader',
                  {loader: 'css-loader', options: {url: false}},
                ],
            },
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './public',
        historyApiFallback: true,
    }
};