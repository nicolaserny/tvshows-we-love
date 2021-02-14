require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `TV Shows we love`,
    description: `You can discover the latest popular tv shows here. We include info, ratings and trailers. Data are updated weekly from TMDB`,
    siteUrl: "https://www.tvshows-welove.fr/",
    author: `Nicolas Erny`,
    twitterUsername: `@nicolaserny`,
    ogimage: "/ogimage.png",
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.tvshows-welove.fr/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TV Shows we 💜`,
        short_name: `tvshowswelove`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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

            endpoints: [["miscPopularTvs", 3]],
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: 0.7,
            };
          }),
      },
    },
    "gatsby-plugin-remove-serviceworker",
    // Enable HTTP/2 push for critical assets.
    "gatsby-plugin-netlify",
  ],
};
