const path = require('path'); // CommonJS
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProgressPlugin()
  ]
};

