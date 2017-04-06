var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');


module.exports = {
	entry: ['./client/main.js','./client/styles.css'],
	target: 'node',
	externals: [nodeExternals()],
	// devtool: 'eval',
	output: { path: __dirname + '/client/dist', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /sinon.js$/,
				loader: "imports-loader?define=>false"
			}
		]
	},
	externals: [
		{
			'react/addons': true,
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': true
		}
	],
	resolve: {
		extensions: ['*','.js','.jsx']
	}
};
