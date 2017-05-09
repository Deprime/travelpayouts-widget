var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		widget: './src/app.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		libraryTarget: "umd",
		library: ['TPO'],
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			},
			{
				test: /\.svg$/,
		        loader: 'file-loader'
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'sass-loader', 'postcss-loader'],
					publicPath: "/"
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			hash: true
			// minify: { collapseWhitespace: true }
		}),
		new ExtractTextPlugin({
			filename: "app.css",
			disable: false,
			allChunks: true
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:8080' })
	]
}