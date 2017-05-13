Webpack 2 Starter
========

[![Build Status][travis-image]][travis-url]

Base implementation of webpack for:
* ES2015
* Typescript
  * tsconfig.json
  * loader
  
* multiple entry points
  
  
```
const path = require('path');

module.exports = {
    // click on the name of the option to get to the detailed documentation
    // click on the items with arrows to show more examples / advanced options

    entry: {
        pageOne: "./app/entry.ts",
        pageTwo: "./js/main.ts"
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
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }


    // list of additional plugins


    /* Advanced configuration (click to show) */
}
```
