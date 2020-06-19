var path = require('path');
 
module.exports = {
    context: path.resolve(__dirname, 'src/main/jsx'),
    entry: {
        main: './index.js'
    },
    devtool: 'sourcemaps',
    cache: false,
    output: {
        path: __dirname,
        filename: './src/main/webapp/resources/js/react/bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.(css|scss|sass)$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            exclude: /(node_modules)/
        } ]
    }
};