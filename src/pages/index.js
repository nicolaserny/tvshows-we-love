import React from "react";
import Layout from "../components/layout";
import { SEO } from "../components";
import { usePopularShows } from "../hooks";
import styled from "styled-components";
import { margins } from "../utils";
import { Illustration, Thumbnail } from "../components";

const Header = styled.header`
  grid-column: 1/-1;
  align-self: center;
  margin: ${margins.m7} 0;
`;

const Wrapper = styled.main`
  display: grid;
  width: 80vw;
  height: calc(100vh-20px);
  margin: 0 auto ${margins.m7} auto;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: auto repeat(auto-fit, minmax(150px, auto));
  grid-auto-flow: dense;
  column-gap: calc(100vw / 20);
  row-gap: 10px;
`;

const WebsiteTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  font-style: normal;
  font-weight: 700;
`;

const DiscoverBlock = styled.div`
  grid-column: 5 / span 3;
  grid-row: 4;
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
        <DiscoverBlock>
          <h2>Discover</h2>
          <h2>Popular TV Shows</h2>
        </DiscoverBlock>
        {posters}
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
