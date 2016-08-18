var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//To load layout automatically ...
(function (files) {
    var fs = require('fs');
    var md5 = function (data)
    {
        var Buffer = require("buffer").Buffer;
        var buf = new Buffer(data);
        var str = buf.toString("binary");
        var crypto = require("crypto");
        return crypto.createHash("md5").update(str).digest("hex");
    }
    files.forEach(function (file) {
        if (!fs.existsSync('./src/' + file) || (md5(fs.readFileSync('../Layout/' + file)) != md5(fs.readFileSync('./src/' + file))))
        {
            console.log('Pathcing ' + file + ' ...');
            fs.createReadStream('../Layout/' + file).pipe(fs.createWriteStream('./src/' + file));
        } else {
            console.log('Layout file ' + file + ' no change ...');
        }
    });
})(['Layout.jsx']);

module.exports = {
  entry: {
    index : './src/index.js'
  },
  output: {
    path: 'dist',
    filename: './js/[name].js'
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
      loader: ExtractTextPlugin.extract(['css', 'less'])
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SpringHack',
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
    new ExtractTextPlugin("./css/[name].css")
  ]
};
