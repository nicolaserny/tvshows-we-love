import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { SEO, Box } from "../components";

const TvshowDetailsTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <SEO title="test" />
      <Box>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Box>
    </Layout>
  );
};

export default TvshowDetailsTemplate;
