import React from "react";
import Layout from "../components/layout";
import { SEO, DiscoverTitle, Illustration, Thumbnail } from "../components";
import { usePopularShows } from "../hooks";
import styled from "styled-components";
import { margins } from "../utils";

const Header = styled.header`
  grid-column: 1/-1;
  align-self: center;
  margin: 0 0 ${margins.m3} 0;
`;

const Wrapper = styled.main`
  display: grid;
  width: 80vw;
  max-width: 1500px;
  @media screen and (min-height: 950px) {
    height: calc(100vh - 2 * ${margins.m7});
  }
  margin: ${margins.m7} auto;
  grid-template-columns: repeat(7, minmax(min-content, 100px));
  grid-template-rows: auto repeat(5, auto);
  grid-auto-flow: dense;
  justify-content: space-around;
  align-content: space-around;
  row-gap: 10px;
`;

const WebsiteTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  font-style: normal;
  font-weight: 700;
`;

const posterIndexed = [1, 5, 6, 8, 10, 11, 12, 14, 16, 17];

const IndexPage = () => {
  const popularShows = usePopularShows();
  const shows = [...popularShows];
  const posters = [...Array(20).keys()].map((el, i) =>
    posterIndexed.includes(i) && shows.length > 0 ? (
      <Thumbnail key={`poster-${el}`} show={shows.shift()} />
    ) : (
      <div key={`poster-${el}`} />
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
