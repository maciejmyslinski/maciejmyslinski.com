const path = require('path');

exports.modifyWebpackConfig = ({ config }) =>
	config
		.merge({
			resolve: {
				root: path.resolve(__dirname, 'src')
			}
		})
		.loader('file-loader', {
			test: /\.(xml|ico)$/
		});
