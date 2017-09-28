const webpack         = require('webpack');
const defaultPlugins  = require('./default');

const occurrenceOrderPlugin = new webpack.optimize.OccurrenceOrderPlugin(true);

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  mangle: true,
  sourceMap: false,
  compress: {
    warnings: false,
    drop_console: false,
    unsafe: true
  }
});

const productionPlugins = [
  defaultPlugins.definePlugin,
  occurrenceOrderPlugin,
  uglifyJsPlugin
];

module.exports = productionPlugins;
