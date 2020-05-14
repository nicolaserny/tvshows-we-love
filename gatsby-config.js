module.exports = {
  siteMetadata: {
    title: `TV Shows we love`,
    description: `Popular tv shows`,
    author: `Nicolas Erny`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TV Shows we love`,
        short_name: `tvshowswelove`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-tmdb",
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
        region: "FR",
        modules: {
          account: {
            activate: false,
          },
          misc: {
            activate: true,

            endpoints: [["miscPopularTvs", 2]],
          },
          tv: {
            activate: false,
          },
        },
        backdrop: true,
        poster: true,
        timezone: "Europe/Paris",
        reqPerTenSeconds: 30,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `Lora`],
      },
    },
  ],
};
