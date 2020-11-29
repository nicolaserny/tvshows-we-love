/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ metadata, lang }) {
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
    ? metadata.ogimage.childImageSharp.fluid.src
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
      <meta
        name="google-site-verification"
        content="3yPm5zhVIZdU89gKl1zmEXjFCj8RMunxnMvFkeXggY8"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
};

SEO.propTypes = {
  lang: PropTypes.string,
  metadata: PropTypes.object,
};

export default SEO;
