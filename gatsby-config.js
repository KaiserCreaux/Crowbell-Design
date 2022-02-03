module.exports = {
    siteMetadata: {
        siteUrl: `https://crowbelldesign.gatsbyjs.io/`,
        title: "Crowbell Design",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    ]
}