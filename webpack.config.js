var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('site.css');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    extractCSS,
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      loaders: ['react-hot', 'babel', 'ts-loader'],
      include: /src/
    },
      {
        test: /\.css$/,
        loader: extractCSS.extract([
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          'postcss-loader',
        ]),
      }
    ]
  }
};
