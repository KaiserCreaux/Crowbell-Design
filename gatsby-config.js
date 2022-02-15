module.exports = {
    siteMetadata: {
        siteUrl: `https://crowbelldesign.gatsbyjs.io/`,
        title: "Crowbell Design",
    },

    plugins: [
      {
        resolve: `gatsby-plugin-google-gtag`,
          options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
              "GTM-T3DL573", // Google Tag Manager
              "G-7304ME8VFM", // Google Analytics
            ],
            head: true,
            anonymize: true,

        },
      },
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
            },
        },
        {
          resolve: "gatsby-plugin-web-font-loader",
            options: {
              google: {
                families: ['Chivo']
              }
              //import "@fontsource/chivo", // Defaults to weight 400.
            }
        },
        ]
}
