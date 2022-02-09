module.exports = {
    siteMetadata: {
        siteUrl: `https://crowbelldesign.gatsbyjs.io/`,
        title: "Crowbell Design",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        `gatsby-remark-images`,
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            gatsbyRemarkPlugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1200,
                },
              },
            ],
          },
        },
      {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `portfolio`,
      path: `${__dirname}/portfolio`,
      }
      },
      {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `src`,
      path: `${__dirname}/src`,
    }
    },
    ]
}
