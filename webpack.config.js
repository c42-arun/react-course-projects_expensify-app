const path = require('path');

module.exports = {
    entry: './src/playground/react-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            // 'use' to specify an array of loaders, whereas 'loader' for a single loader (as above for babel)
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true    // to serve index.html for any 404 so that any client-side route entered directly in 
                                    // address bar is handled by client-side javascript that kicks in upon loading index.html        
    }
}