module.exports = {
  plugins: [
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maciej Myśliński`,
        short_name: `Maciej Myśliński`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2D9CDB`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
