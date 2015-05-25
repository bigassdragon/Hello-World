const webpack = require('webpack');

module.exports = {
	entry: './src/jsx/index.jsx',
	output: {
		filename: './src/js/bundle.js',
		sourceMapFilename: './src/js/bundle.map'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/, 
				loaders: ['react-hot', 'babel']
			}
		]
	},
	externals: {
		'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
}
