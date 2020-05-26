import React from "react";
import styled from "styled-components";
import Box from "./box";
import Image from "gatsby-image";

const StyledHeroSection = styled(Box).attrs({ as: "section" })``;

const StyledHeroImage = styled(Image)`
  width: 100%;
  margin: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
`;

const TvshowHero = ({ photo }) => (
  <StyledHeroSection>
    <StyledHeroImage alt="" fluid={photo.fluid}></StyledHeroImage>
  </StyledHeroSection>
);

export default TvshowHero;
