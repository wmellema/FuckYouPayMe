const path = require('path');

module.exports = {
	entry: './src',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.css/,
			loaders: ['style-loader','css-loader'],
			include: __dirname + '/src'

		},
		{
			test: /\.html$/,
			use: [ {
				loader: 'html-loader',
				options: {
					minimize: true,
				}
			}
			]
		}],
	}
};
