module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Maciej Myśliński',
				short_name: 'Maciej Myśliński',
				start_url: '/',
				display: 'standalone',
				icons: [
					{
						src: '/favicons/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/favicons/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				],
				theme_color: '#ffffff',
				background_color: '#ffffff'
			}
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-react-next',
		'gatsby-plugin-styled-components'
	]
};
