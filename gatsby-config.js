require("dotenv").config({
  path: `.env.*`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nati Chef",
    description: "בלה בלה בלה",
    author: "Natali Haleli",
    titleTemplate: "%s | Nati chef",
    siteUrl: "https://www.example.com",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:8082`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`category`, `recipe`],
        singleTypes: [`about-me`, `logo`],
      },
    },
  ],
}
