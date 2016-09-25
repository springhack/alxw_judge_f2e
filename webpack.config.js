var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: 'dist',
    filename: './res/js/[name].js'
  },
  resolve: {
    
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loader: 'babel-loader',
      exclude: function (path) {
        return (!!path.match(/node_modules/));
      },
      query: {
        presets:['react','es2015']
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(['css'])
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(['css', 'less?{"relativeUrls":""}'])
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
	    collapseWhitespace: false
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin("./res/css/[name].css")
  ]
};
