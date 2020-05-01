import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import { SEO, Box } from "../components";

export const query = graphql`
  query($tvshowId: Int) {
    popular: allTmdbMiscPopularTvs(
      filter: { miscPopularTvsId: { eq: $tvshowId } }
    ) {
      nodes {
        name
        overview
        vote_average
        tvshowId: miscPopularTvsId
        backdrop_path {
          childImageSharp {
            fluid(maxWidth: 648, maxHeight: 364) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const TvshowDetailsTemplate = ({ data: { popular } }) => {
  const tvshow = popular.nodes[0];
  return (
    <Layout>
      <SEO title={tvshow.name} />
      <Box>
        <h1>{tvshow.name}</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Box>
    </Layout>
  );
};

export default TvshowDetailsTemplate;
