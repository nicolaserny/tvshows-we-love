import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { SEO, Box } from "../components";
import { usePopularShows } from "../hooks";
import styled from "styled-components";

const Header = styled(Box).attrs({ as: "header" })``;
const Main = styled(Box).attrs({ as: "main" })``;

const IndexPage = () => {
  const popularShows = usePopularShows();
  return (
    <Layout>
      <SEO title="Home" />
      <Header>
        <h1>Header</h1>
      </Header>
      <Main>
        <h1>Home</h1>
        <p>Welcome</p>
        <ul>
          {popularShows.map((show) => (
            <li key={show.id}>
              <Link to={`/tvshow/${show.id}`}>{show.name}</Link>
            </li>
          ))}
        </ul>
      </Main>
    </Layout>
  );
};

export default IndexPage;
