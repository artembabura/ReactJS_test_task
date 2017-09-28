const webpack 				    = require('webpack');
const defaultPlugins 		  = require('./default');
const hmrPlugin 			    = new webpack.HotModuleReplacementPlugin();
const namedModulesPlugin 	= new webpack.NamedModulesPlugin();

const devPlugins = [ defaultPlugins.definePlugin, hmrPlugin, namedModulesPlugin ];

module.exports = devPlugins;
