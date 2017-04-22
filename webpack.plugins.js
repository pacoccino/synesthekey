const { webpack } = require('@webpack-blocks/webpack2')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.basePlugins = [
  new CopyWebpackPlugin([
    { from: './content' },
  ]),
  new HtmlWebpackPlugin({
    inject: true,
    template: './content/index.html'
  }),
];

exports.productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  // new webpack.optimize.DedupePlugin(),    // TODO: Does not work w/ webpack 2 yet... :-/
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    },
    screwIe8: true,
    sourceMap: false
  }),
];