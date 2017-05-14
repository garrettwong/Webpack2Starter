var webpack = require('webpack'); // required
const path = require('path');


module.exports = {
    // click on the name of the option to get to the detailed documentation
    // click on the items with arrows to show more examples / advanced options

    // multi-page entry points
    entry: {
        home: './app/home.ts',
        pageOne: "./app/entry.ts"
    },
    // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "[name]-bundle.js", // string
        // the filename template for entry chunks

        publicPath: "/assets/", // string
        // the url to the output directory resolved relative to the HTML page

        library: "MyLibrary", // string,
        // the name of the exported library

        libraryTarget: "umd", // universal module definition
        // the type of the exported library

        /* Advanced output configuration (click to show) */
    },

    module: {
        loaders: [
            {
                // https://github.com/babel/babel-loader
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                // https://github.com/TypeStrong/ts-loader

                // npm install ts-loader --save-dev
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                //https://github.com/webpack-contrib/sass-loader

                // npm install style-loader css-loader node-sass sass-loader --save-dev
                // "css-loader": "^0.28.1",
                // "node-sass": "^4.5.2",
                // "sass-loader": "^6.0.5",
                // "style-loader": "^0.17.0",
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    // this plugin is used to initialize libs such as bootstrap which require jQuery
    // http://stackoverflow.com/questions/37651015/webpack-using-bootstrap-jquery-is-not-defined
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]


    // list of additional plugins


    /* Advanced configuration (click to show) */
}