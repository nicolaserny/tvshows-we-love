import { graphql, useStaticQuery } from "gatsby";

export const usePopularShows = () => {
  const data = useStaticQuery(graphql`
    query {
      popular: allTmdbMiscPopularTvs(
        limit: 12
        filter: {
          vote_count: { gt: 500 }
          first_air_date: { gt: "2006-01-01" }
          poster_path: { id: { ne: null } }
        }
        sort: { fields: [popularity], order: DESC }
      ) {
        nodes {
          name
          tvshowId: miscPopularTvsId
          poster_path {
            childImageSharp {
              fluid(maxWidth: 90, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      tvshowExtensions: allTvshowExtension {
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
