import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { SEO } from "../components";
import BackHeader from "../components/backHeader";
import TvshowHero from "../components/tvshowHero";
import TvshowBlock from "../components/tvshowBlock";

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
      <BackHeader />
      <TvshowHero photo={tvshow.backdrop_path.childImageSharp} />
      <TvshowBlock title={tvshow.name} />
    </Layout>
  );
};

export default TvshowDetailsTemplate;
