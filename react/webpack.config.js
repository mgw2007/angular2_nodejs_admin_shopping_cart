const webpack = require("webpack");
const path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "source-map",
  entry: {
    app: ["babel-polyfill", "react-hot-loader/patch", "./src/index"],
    styles: [
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "./node_modules/font-awesome/css/font-awesome.css",
      "./node_modules/ionicons/dist/css/ionicons.css",
      "./node_modules/bootstrap-fileinput/css/fileinput.css",
      "./assets/dist/css/AdminLTE.min.css",
      "./assets/dist/css/skins/_all-skins.min.css",
      "./assets/plugins/iCheck/square/blue.css",
      "./assets/css/loader.css",
      "./assets/css/styles.css"
    ],
    scripts: [
      "script-loader!./assets/plugins/jQuery/jquery-2.2.3.min.js",
      "script-loader!./node_modules/file-saver/FileSaver.js",
      "script-loader!./node_modules/bootstrap/dist/js/bootstrap.js",
      "script-loader!./assets/plugins/slimScroll/jquery.slimscroll.min.js",
      "script-loader!./assets/plugins/fastclick/fastclick.js",
      "script-loader!./assets/plugins/bootstrap-notify.js",
      "script-loader!./node_modules/bootstrap-fileinput/js/fileinput.js",
      "script-loader!./assets/plugins/iCheck/icheck.min.js",
      "script-loader!./assets/dist/js/app.min.js",
      "script-loader!./assets/dist/js/demo.js",
      "script-loader!./assets/dist/js/custom.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "./assets"),
          path.resolve(__dirname, "./node_modules")
        ],
        loader: "babel-loader"
        // use: [
        // {
        // loader: "babel-loader",
        // options: {
        //     babelrc: false,
        //     presets: [
        //         [
        //             'latest',
        //             { 'es2015': { 'modules': false } },
        //         ],
        //         'react',
        //         'stage-2'
        //     ],
        //     "plugins": [
        //         "react-hot-loader/babel"
        //     ]
        // }
        // },
        // ]
      }
    ]
  },
  plugins: [
  //  new webpack.ProvidePlugin({
  //       $: "jquery",
  //   }),
    new webpack.optimize.CommonsChunkPlugin(
        {name:"scripts",  filename:"scripts.bundle.js"}
    ),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("full.css"),
    new HtmlWebpackPlugin({
      title: "Custom template using Handlebars",
      template: "./src/index.html"
    })
  ],
  devServer: {
    host: "localhost",
    port: 8080,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true
    // enable HMR on the server
  }
};
