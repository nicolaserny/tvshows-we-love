exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      popular: allTmdbMiscPopularTvs(
        limit: 10
        filter: { vote_average: { gt: 8 } }
        sort: { fields: [popularity], order: DESC }
      ) {
        nodes {
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create tvshow details", result.errors);
  }

  const tvshows = result.data.popular.nodes;

  tvshows.forEach((tvshow) => {
    actions.createPage({
      path: `/tvshow/${tvshow.id}`,
      component: require.resolve("./src/templates/tvshow-details.js"),
      context: {
        id: tvshow.id,
      },
    });
  });
};
