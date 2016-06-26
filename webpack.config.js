var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				query: {
					presets: ["es2015","react"]
				}
			},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
		]
	},
  plugins: [
    new ExtractTextPlugin('css/style.css', {
      allChunks: true
    })
  ]
}