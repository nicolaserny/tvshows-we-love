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
    }
  `);
  return data.popular.nodes.map((node) => ({
    name: node.name,
    tvshowId: node.tvshowId,
  }));
};
