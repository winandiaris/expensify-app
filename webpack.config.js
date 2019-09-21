
const path = require('path')


module.exports = {

    entry : path.resolve(__dirname, './src/app.js') ,// path direktori file/script utama 
    //entry : './public/src/app.js',
    output : {
        path : path.join(__dirname, 'public'), // path direktori output file webpack
        
        filename : "bundle.js", //nama file webpack
        //publicPath: '/public/'
    },

    module :{
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/, //regex untuk mencari extention .js
            exclude : /node_modules/
        },
        {
            test : /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    
    ]
    },

    devtool : 'cheap-module-eval-source-map',
    devServer : {
        
        contentBase : './public',
        historyApiFallback: true

    }
}