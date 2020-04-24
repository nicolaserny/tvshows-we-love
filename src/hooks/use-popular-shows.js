import { graphql, useStaticQuery } from "gatsby";

export const usePopularShows = () => {
  const data = useStaticQuery(graphql`
    query {
      popular: allTmdbMiscPopularTvs(
        limit: 10
        filter: { vote_average: { gt: 8 } }
        sort: { fields: [popularity], order: DESC }
      ) {
        nodes {
          name
          id
        }
      }
    }
  `);
  return data.popular.nodes.map((node) => ({ name: node.name, id: node.id }));
};
