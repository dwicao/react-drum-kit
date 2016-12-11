var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
        test: /\.css$/,
        loader: "style-loader!css-loader"
		  },
			{
        test: /\.wav$/,
        loader: "file-loader"
		  }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
	   		'process.env': {
	     		 NODE_ENV: JSON.stringify('production')
	    	}
	  	}),
    new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('styles.css'),
		HtmlWebpackPluginConfig,
	]
};
