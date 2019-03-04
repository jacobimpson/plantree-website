module.exports = {
  siteMetadata: {
    title: `Plantree - Vegan Recipes`,
    description: `Website for Plantree mobile app`,
    author: `@jacobimpson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ],
}