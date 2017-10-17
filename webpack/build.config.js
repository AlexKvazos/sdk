const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

const WebpackConfig = {

  // Disable source maps on production builds
  devtool: false,

  entry: {
    'control/content/content': path.join(__dirname, '../plugin/control/content/content.js'),
    'control/design/design': path.join(__dirname, '../plugin/control/design/design.js'),
    'control/settings/settings': path.join(__dirname, '../plugin/control/settings/settings.js'),
    'widget/widget': path.join(__dirname, '../plugin/widget/widget.js'),
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },

  externals: {
    buildfire: 'buildfire',
    angular: 'angular',
    jquery: '$',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'control/content/index.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../plugin/control/content/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'control/design/index.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../plugin/control/design/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'control/settings/index.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../plugin/control/settings/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'widget/index.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../plugin/widget/index.html')
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../plugin'),
      to: path.join(__dirname, '../dist'),
    }], { ignore: ['*.js', '*.html', '*.md'] }),
    new ZipWebpackPlugin({
      path: path.join(__dirname, '../'),
      filename: `plugin.zip`
    })
  ]

};

module.exports = WebpackConfig;
