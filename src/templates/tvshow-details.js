import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { device } from "../utils";
import Layout from "../components/layout";
import { Seo } from "../components";
import BackHeader from "../components/backHeader";
import TvshowHero from "../components/tvshowHero";
import TvshowBlock from "../components/tvshowBlock";

export const query = graphql`
  query ($tvshowId: Int) {
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
            gatsbyImageData(
              width: 900
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
    tvshowExtensions: allTvshowExtension(
      filter: { tvshowId: { eq: $tvshowId } }
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

const Wrapper = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  display: grid;
  grid-gap: 5px;

  @media screen and (min-width: ${device.medium}) {
    margin: 0;
    max-width: 100vw;
    grid-template-columns: auto minmax(min-content, 80vw) auto;
    grid-auto-rows: minmax(0px, auto);
  }

  @media screen and (min-width: ${device.large}) {
    margin: 0;
    max-width: 100vw;
    grid-template-columns: auto minmax(min-content, 940px) auto;
    grid-auto-rows: minmax(0px, auto);
  }
`;

const TvshowDetailsTemplate = ({ data: { popular, tvshowExtensions } }) => {
  const tvshow = popular.nodes[0];
  const tvshowExt = tvshowExtensions.nodes[0];
  const metaDescription =
    tvshow.overview.length <= 150
      ? tvshow.overview
      : `${tvshow.overview.substring(0, 148)}...`;
  return (
    <Layout>
      <Wrapper>
        <Seo
          metadata={{
            title: tvshow.name,
            ogimage: tvshow.backdrop_path,
            description: metaDescription,
          }}
        />
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
      </Wrapper>
    </Layout>
  );
};

export default TvshowDetailsTemplate;
