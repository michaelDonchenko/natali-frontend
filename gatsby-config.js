require("dotenv").config({
  path: `.env.*`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nati chef",
    description:
      "ברוכים הבאים לאתר שכולו מתכונים. תוכלו למצוא כאן מתכוני בצקים, מתכונים דלי קלוריות תבשילים מהממים ועוד",
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
        apiURL: `https://natali-strapi-backend.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`category`, `recipe`],
        singleTypes: [`about-me`, `logo`],
      },
    },
  ],
}
