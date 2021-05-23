/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

function Seo({ metadata, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            ogimage
            siteUrl
          }
        }
      }
    `,
  );
  const defaults = site.siteMetadata;

  const title = metadata?.title
    ? `${metadata.title} - ${defaults.title}`
    : defaults.title;
  const siteUrl = site.siteMetadata.siteUrl;
  const description = metadata?.description || defaults.description;
  const ogimage = metadata?.ogimage
    ? getSrc(metadata.ogimage)
    : defaults.ogimage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={`${siteUrl}${ogimage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaults.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={defaults.twitterUsername} />
      <meta name="twitter:image" content={`${siteUrl}${ogimage}`} />
      <meta name="og:image" content={`${siteUrl}${ogimage}`} />
      <meta name="og:image:secure_url" content={`${siteUrl}${ogimage}`} />
      <meta name="image" property="og:image" content={`${siteUrl}${ogimage}`} />
      <meta property="og:site_name" content={defaults.title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />

      <link
        rel="preload"
        as="font"
        href="/fonts/lora-v16-latin-700.woff2"
        type="font/woff2"
        crossorigin="anonymous"
      ></link>
      <link
        rel="preload"
        as="font"
        href="/fonts/montserrat-v14-latin-600.woff2"
        type="font/woff2"
        crossorigin="anonymous"
      ></link>
      {process.env.NODE_ENV === "production" && (
        <script
          async
          defer
          data-domain="tvshows-welove.fr"
          src="https://plausible.io/js/plausible.js"
        ></script>
      )}
      <meta
        name="google-site-verification"
        content="3yPm5zhVIZdU89gKl1zmEXjFCj8RMunxnMvFkeXggY8"
      />
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `en`,
};

Seo.propTypes = {
  lang: PropTypes.string,
  metadata: PropTypes.object,
};

export default Seo;
