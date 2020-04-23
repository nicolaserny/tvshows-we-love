import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Welcome</p>
    <Link to="/tvshow-details/">Go to test page</Link>
  </Layout>
);

export default IndexPage;
