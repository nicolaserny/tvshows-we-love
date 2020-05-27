import React from "react";
import Layout from "../components/layout";
import { SEO, DiscoverTitle, Illustration, Thumbnail } from "../components";
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
    grid-template-columns: repeat(5, minmax(min-content, 100px));
    grid-template-rows: auto repeat(5, auto);
  }
  @media screen and (min-width: ${device.medium}) {
    grid-template-columns: repeat(6, minmax(min-content, 100px));
    grid-template-rows: auto repeat(6, auto);
  }
  @media screen and (min-width: ${device.large}) {
    grid-template-columns: repeat(7, minmax(min-content, 100px));
    grid-template-rows: auto repeat(5, auto);
  }
`;

const WebsiteTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  font-style: normal;
  font-weight: 700;
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
  const posters = [...Array(20).keys()].map((el, i) =>
    posterIndexed.includes(i) && shows.length > 0 ? (
      <Thumbnail key={`poster-${el}`} show={shows.shift()} />
    ) : (
      <EmptyDiv key={`poster-${el}`} />
    ),
  );
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Header>
          <WebsiteTitle>TV Shows we &hearts;</WebsiteTitle>
        </Header>
        <Illustration />
        <DiscoverTitle />
        {posters}
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
