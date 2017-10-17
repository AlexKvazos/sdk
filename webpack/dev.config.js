const path = require('path');

const WebpackConfig = {

  // Source map type
  // @see https://webpack.js.org/configuration/devtool/
  devtool: 'eval-source-map',

  entry: {
    devServer: `webpack-dev-server/client?http://0.0.0.0:8080`,
    hmr: `webpack/hot/dev-server`,
    'control/content/content': path.join(__dirname, '../plugin/control/content/content.js'),
    'control/design/design': path.join(__dirname, '../plugin/control/design/design.js'),
    'control/settings/settings': path.join(__dirname, '../plugin/control/settings/settings.js'),
    'widget/widget': path.join(__dirname, '../plugin/widget/widget.js'),
  },

  output: {
    path: path.join(__dirname, '../'),
    filename: 'plugin/[name].js',
    publicPath: 'http://0.0.0.0:8080/'
  },

  externals: {
    buildfire: 'buildfire',
    angular: 'angular',
    jquery: '$',
  },

  devServer: {
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    inline: true,
    contentBase: path.join(__dirname, '../'),
    publicPath: '/',
    quiet: false,
    noInfo: true,
    disableHostCheck: true,
  }

};

module.exports = WebpackConfig;
