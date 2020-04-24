import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { usePopularShows } from "../hooks";

const IndexPage = () => {
  const popularShows = usePopularShows();
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <p>Welcome</p>
      <ul>
        {popularShows.map((show) => (
          <li>{show.name}</li>
        ))}
      </ul>
      <Link to="/tvshow-details/">Go to test page</Link>
    </Layout>
  );
};

export default IndexPage;
