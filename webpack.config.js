const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const packageInfo = require('./package.json');
const packageName = packageInfo.name.replace(/@[^/]+\//, '');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    libraryTarget: 'umd',
    pathinfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    compress: true,
    stats: 'errors-only',
    port: 3008
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: "babel-loader",
        query:
          {
            presets:['stage-0','react']
          }
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      // {
			//   test: /\.js$/,
  		// 	include: [
  		// 		path.resolve(__dirname, 'src')
  		// 	],
  		// 	loader: 'eslint-loader',
  		// 	exclude: /node_modules/
  		// },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader","less-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
