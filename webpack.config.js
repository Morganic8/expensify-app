//****Configuring Webpack*****

// First, set your 'scripts' object up in package.json
// in the 'scripts' object, make a 'build' key, and 'webpack --w' value
//This will fire up your webpack.config.js script and watch for changes


//inside of Webpack.config
//Require path from node.js in const variable
//create module.exports object
//entry point will be whereever app.js is, typically 'src'
//output is an object with multiple keys
// key 'path', set value path.join(__dirname, 'public')
// key 'filename', set to whatever you want to name the file, typically bundle.js
//use path.join to combine __dirname and 'public'
//public is where we will serve the bundle js



//entry point -> output

// path.join-- node.js  joins the paths

const path = require('path');
//console.log(path.join(__dirname, 'public'));
//console.log(__dirname);

//Helps webpack extract css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');


module.exports = (env) => {
    //check if we are in production
    const isProduction = env == 'production';
    
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                //Extract css file away from bundle.js into it's own file
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    ]
                })
            }]

        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    };
};



// ***** Getting Started with Babel ****

//loader -  transfroms file with babel
//install babel-core
//install babel-loader
//set up 'module' object
//make rules inside of module
 //----loader key, set to babel-loader so webpack knows which npm mod
 //-----test key uses Regular Expressions to target the files you want
 //----  /\.js$/ with transform files that end with ".js"
 //------exclude files, especially node_modules
 //make ".babelrc" file in root of project so babel knows what presets to use
 

 //***********   Making it easier to debug in Webpack - Source Map */

 // 1.) create new key under "Module" called, 'devtool'
 // 2.) can always look at webpack documentation for devtool section
 // 3.) we are using 'cheap-module-eval-source-map'
 // 4.) must restart webpack to see changes
 // 5.) This is only for development, not production


 // ***** Setting up Dev Server ****


 // 1.) in terminal, yarn add webpack-dev-server
 // 2.) type in devServer.contentBase with abs path to public files
 // 3.) go to pkg.json and create script to run 'webpack-dev-server'
 // 4.) this script will create a dev server and watch for changes all in one
 // 5.) NOTE: will not create bundle.js, must run the 'build' script to make bundle.js