module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:400,700:latin-ext'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Maciej Myśliński',
        short_name: 'mm',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2D9CDB',
        display: 'standalone',
        icon: 'src/images/avatar.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
