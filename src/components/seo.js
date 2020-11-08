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

function SEO({ description, lang, meta, title, ogimage }) {
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

  const siteUrl = site.siteMetadata.siteUrl;
  const metaDescription = description || site.siteMetadata.description;
  const metaOgimage = ogimage
    ? ogimage.childImageSharp.fluid.src
    : site.siteMetadata.ogimage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${metaOgimage}`,
        },
        {
          property: `og:image:secure_url`,
          content: `${siteUrl}${metaOgimage}`,
        },
        {
          property: `image`,
          content: `${siteUrl}${metaOgimage}`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:image`,
          content: `${siteUrl}${metaOgimage}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
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
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
