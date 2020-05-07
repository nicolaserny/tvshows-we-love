import { graphql, useStaticQuery } from "gatsby";

export const usePopularShows = () => {
  const data = useStaticQuery(graphql`
    query {
      popular: allTmdbMiscPopularTvs(
        limit: 10
        filter: { vote_average: { gt: 7.5 }, vote_count: { gt: 500 } }
        sort: { fields: [popularity], order: DESC }
      ) {
        nodes {
          name
          tvshowId: miscPopularTvsId
        }
      }
      tvshowExtensions: allTvshowExtension(
        filter: { trailerKey: { ne: null } }
      ) {
        nodes {
          tvshowId
        }
      }
    }
  `);
  return data.popular.nodes
    .filter(
      (node) =>
        data.tvshowExtensions.nodes.findIndex(
          (e) => e.tvshowId === node.tvshowId,
        ) !== -1,
    )
    .map((node) => ({
      name: node.name,
      tvshowId: node.tvshowId,
    }));
};
