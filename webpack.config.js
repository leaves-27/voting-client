var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');//用来生成一个html
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var devServer = {
  host:"192.168.124.82",
  port:"8080",
  contentBase: './dist',
  hot: true
}

module.exports = {
  entry:[
    'webpack-dev-server/client?http://'+devServer.host+':'+devServer.port,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module : {
    loaders : [{
      test : /\.js?$/,
      loader :'babel',
      exclude: /node_modules/,
      query : {
        presets : ["es2015","stage-0","react"],
        sourceMap : true
      }
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=application/font-woff"
    },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=application/font-woff2"
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=application/octet-stream"
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "file"},
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
      loader: "url?limit=10000&mimetype=image/svg+xml"
    },{ 
      test: /\.css$/, 
      loader: ExtractTextPlugin.extract("style-loader","css-loader") 
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer : devServer,
  plugins: [
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};