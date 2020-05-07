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
    tvshowExtensions: allTvshowExtension(
      filter: { trailerKey: { ne: null }, tvshowId: { eq: $tvshowId } }
    ) {
      nodes {
        tvshowId
        numberOfSeasons
        cast
        trailerKey
      }
    }
  }
`;

const TvshowDetailsTemplate = ({ data: { popular, tvshowExtensions } }) => {
  const tvshow = popular.nodes[0];
  const tvshowExt = tvshowExtensions.nodes[0];
  return (
    <Layout>
      <SEO title={tvshow.name} />
      <BackHeader />
      <TvshowHero photo={tvshow.backdrop_path.childImageSharp} />
      <TvshowBlock
        title={tvshow.name}
        rating={tvshow.vote_average}
        seasonCount={tvshowExt.numberOfSeasons}
        overview={tvshow.overview}
        castMembers={tvshowExt.cast}
        trailerKey={tvshowExt.trailerKey}
      />
    </Layout>
  );
};

export default TvshowDetailsTemplate;
