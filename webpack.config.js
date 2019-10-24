
const path = require('path')
// const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

// process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// if (process.env.NODE_ENV === 'test'){
//     require('dotenv').config({ path: '.env.test'})
    
// } else if (process.env.NODE_ENV === 'development')
//     require('dotenv').config({ path: '.env.development'})


module.exports = (env) => {
    const isProduction = env === 'production'
    //const CSSExtract = new ExtractTextPlugin('styles.css')

    console.log('env', env)
    return {
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
            }),
            // new webpack.DefinePlugin({
            //     'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
            //     'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            //     'process.env.FIREBASE_DATABASE_URL' : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            //     'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            //     'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            //     'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            //     'process.env.FIREBASE_APP_ID' : JSON.stringify(process.env.FIREBASE_APP_ID),
            //     'process.env.FIREBASE_MEASUREMENT_ID' : JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
            // })
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
            // publicPath: './dist/'
    
        }
    }
    
}