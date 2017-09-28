const path                  = require('path');
const prodPlugins           = require('./plugins/prod');
const devPlugins            = require('./plugins/dev');
const production            = process.env.NODE_ENV === 'production';
const projectRootDir        = path.join(__dirname, '..');
const contextPath           = path.join(projectRootDir, 'src');
const entriesPath           = path.join(projectRootDir, 'src', 'entries');
const publicPath            = path.join(projectRootDir, 'public');

let entry = {
  main: path.join(entriesPath, 'main.js'),
};

module.exports = {
  context: contextPath,
  devtool: production ? false : 'cheap-module-eval-source-map',
  entry: entry,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      react: path.join(projectRootDir, '/node_modules/react'),
    }
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ]
  },
  output: {
    path: publicPath,
    filename: 'js/bundle.js',
  },
  plugins: production ? [
    ...prodPlugins
  ] : [
    ...devPlugins,
  ],
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    host: '127.0.0.1',
    port: 8080,
    historyApiFallback: true,
    contentBase: publicPath,
  }
};
