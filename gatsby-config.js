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
          resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "GTM-T3DL573", // Google Tag Manager
                "G-7304ME8VFM", // Google Analytics
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              //gtagConfig: {
                //optimize_id: "OPT_CONTAINER_ID",
                //anonymize_ip: true,
                //cookie_expires: 0,
              //},
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Defaults to https://www.googletagmanager.com
                origin: "YOUR_SELF_HOSTED_ORIGIN",
              },
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
