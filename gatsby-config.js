/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `F0RTHSP4CE`,
    description: `F0RTHSP4CE Hackerspace in Tbilisi, Georgia`,
    author: `f0rthsp4ce`,
    siteUrl: `https://f0rthsp4ce.github.io/website2/`,
  },
  pathPrefix: `/website2`,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "F0RTHSP4CE Hackerspace in Tbilisi, Georgia",
        short_name: "F0RTHSP4CE",
        start_url: `/website2`,
        icon: "src/images/icons/favicon-32x32.png",
        include_favicon: true,
        icons: [
          {
            src: "src/images/icons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone"
      },
    },
  ],
}
