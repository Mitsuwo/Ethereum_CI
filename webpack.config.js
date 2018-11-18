const path = require('path');
 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './public',
        inline: true
    }
};