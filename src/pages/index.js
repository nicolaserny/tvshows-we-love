import React from "react";
import Layout from "../components/layout";
import {
  SEO,
  DiscoverTitle,
  Illustration,
  Thumbnail,
  AppTitle,
} from "../components";
import { usePopularShows } from "../hooks";
import styled from "styled-components";
import { margins, device } from "../utils";

const Header = styled.header`
  grid-column: 1/-1;
  align-self: center;
  margin: 0 0 ${margins.m3} 0;
`;

const Wrapper = styled.main`
  display: grid;
  width: 80vw;
  max-width: 1500px;
  @media screen and (min-height: 850px) and (max-height: 1500px) {
    height: calc(100vh - 2 * ${margins.m7});
  }
  margin: ${margins.m7} auto;
  grid-template-columns: repeat(3, minmax(min-content, 80px));
  grid-template-rows: auto repeat(5, auto);
  grid-auto-flow: dense;
  justify-content: space-around;
  align-content: space-around;
  row-gap: 10px;
  @media screen and (min-width: ${device.small}) {
    grid-template-columns: repeat(5, minmax(min-content, 90px));
    grid-template-rows: auto repeat(5, auto);
  }
  @media screen and (min-width: ${device.medium}) {
    grid-template-columns: repeat(6, minmax(min-content, 90px));
    grid-template-rows: auto repeat(6, auto);
  }
  @media screen and (min-width: ${device.large}) {
    grid-template-columns: repeat(7, minmax(min-content, 90px));
    grid-template-rows: auto repeat(5, auto);
  }
`;

const EmptyDiv = styled.div`
  display: none;
  @media screen and (min-width: ${device.medium}) {
    display: block;
  }
`;

const posterIndexed = [1, 3, 5, 6, 8, 9, 10, 11, 12, 14, 16, 18];

const IndexPage = () => {
  const popularShows = usePopularShows();
  const shows = [...popularShows];
  const posters = [...Array(20).keys()].map((el, i) => {
    if (posterIndexed.includes(i) && shows.length > 0) {
      const show = shows.shift();
      return <Thumbnail key={`poster-${show.tvshowId}-${el}`} show={show} />;
    } else {
      return <EmptyDiv key={`poster-${el}`} />;
    }
  });
  return (
    <Layout>
      <SEO metadata={{ title: "Discover popular tv shows" }} />
      <Wrapper>
        <Header>
          <AppTitle />
        </Header>
        <Illustration />
        <DiscoverTitle />
        {posters}
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
