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
        "G-7304ME8VFM", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
        send_page_view: true // default appears to be false.
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
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
