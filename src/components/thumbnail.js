import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledLink = styled(Link)`
  transition: 200ms box-shadow ease-in;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: auto;
  height: auto;
  &:focus,
  &:hover {
    box-shadow: 0 2px 14px #222244;
    z-index: 10;
  }
`;
const StyledImage = styled(GatsbyImage)`
  display: block;
  transform: translateZ(0);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  * {
    margin-top: 0;
  }
`;

const Thumbnail = ({ show }) => (
  <StyledLink to={`/tvshow/${show.tvshowId}/`}>
    <StyledImage
      image={show.poster.gatsbyImageData}
      objectFit="cover"
      objectPosition="50% 50%"
      alt={show.name}
    />
  </StyledLink>
);

export default Thumbnail;
