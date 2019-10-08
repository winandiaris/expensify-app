
const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'


module.exports = (env) => {
    const isProduction = env === 'production'
    //const CSSExtract = new ExtractTextPlugin('styles.css')

    console.log('env', env)
    return {
        entry : path.resolve(__dirname, './src/app.js') ,// path direktori file/script utama 
        //entry : './public/src/app.js',
        output : {
            path : path.join(__dirname, './public/dist'), // path direktori output file webpack
            
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                            // hmr: process.env.NODE_ENV === 'production'
                          },

                        //   loader: 'css-loader',
                        //   options: {
                        //       sourceMap: true
                        //   },

                        //   loader: 'sass-loader',
                        //       options: {
                        //           sourceMap: true
                        //       }
                    },
                    // {
                    //           loader: 'css-loader',
                    //           options: {
                    //               sourceMap: true
                    //           }
                    //       ,
                          
                    //           loader: 'sass-loader',
                    //           options: {
                    //               sourceMap: true
                    //           }  
                    // }     
                    'css-loader',
                    'sass-loader',
                    

                 ]

                // use: 
                // //CSSExtract.extract
                // // ExtractTextPlugin.extract
                // ({
                //     use: [
                //         'style-loader',
                //         'css-loader',
                //         'sass-loader'
                //     ]
                // })
            }
        
        ]
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            })
        ],

        // plugins: [
        //     //CSSExtract
        //     new ExtractTextPlugin('styles.css')
        // ],
    
        devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map', //diganti dibawah, katanya banyak bug
        // devtool : isProduction ? 'source-map' : 'inline-source-map',
        devServer : {
            contentBase : './public',
            historyApiFallback: true,
            // publicPath: path.join(__dirname, './public/dist')
            publicPath: './dist/'
    
        }
    }
    
}