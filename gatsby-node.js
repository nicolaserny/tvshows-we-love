const fetch = require("node-fetch");

const getDataFromMovieDbAsync = async (tvshowId, slug) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvshowId}${slug || ""}?api_key=${
      process.env.API_KEY
    }&language=en-US`,
  );
  const data = await response.json();
  return data;
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type TvshowExtension implements Node {
      tvshowId: Int
      numberOfSeasons: Int
      cast: [String]
      trailerKey: String!
    }
  `);
};

exports.createPages = async ({
  actions,
  graphql,
  reporter,
  createContentDigest,
  createNodeId,
}) => {
  const result = await graphql(`
    query {
      popular: allTmdbMiscPopularTvs(
        limit: 10
        filter: { vote_count: { gt: 500 } }
        sort: { fields: [popularity], order: DESC }
      ) {
        nodes {
          miscPopularTvsId
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create tvshow details", result.errors);
  }

  const tvshows = result.data.popular.nodes;

  for (let tvshow of tvshows) {
    const commonData = await getDataFromMovieDbAsync(tvshow.miscPopularTvsId);
    const credits = await getDataFromMovieDbAsync(
      tvshow.miscPopularTvsId,
      "/credits",
    );
    const videos = await getDataFromMovieDbAsync(
      tvshow.miscPopularTvsId,
      "/videos",
    );
    let trailer = videos.results.find((video) => video.type === "Trailer");
    if (!trailer) {
      trailer = videos.results.find((video) => video.type === "Teaser");
    }
    actions.createNode({
      id: createNodeId(`extension-${tvshow.miscPopularTvsId}`),
      parent: null,
      children: [],
      internal: {
        type: `TvshowExtension`,
        contentDigest: createContentDigest(
          "${tvshow.miscPopularTvsId}-${data.number_of_seasons}",
        ),
      },
      numberOfSeasons: commonData.number_of_seasons,
      tvshowId: tvshow.miscPopularTvsId,
      cast: credits.cast.map((cast) => cast.name),
      ...(trailer && trailer.key && { trailerKey: trailer.key }),
    });

    actions.createPage({
      path: `/tvshow/${tvshow.miscPopularTvsId}`,
      component: require.resolve("./src/templates/tvshow-details.js"),
      context: {
        tvshowId: tvshow.miscPopularTvsId,
      },
    });
  }
};
