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
          poster_path {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 750) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
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
      poster: node.poster_path.childImageSharp,
    }));
};
