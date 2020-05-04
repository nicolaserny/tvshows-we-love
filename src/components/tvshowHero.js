import React from "react";
import styled from "styled-components";
import Box from "./box";
import Image from "gatsby-image";

const StyledHeroSection = styled(Box).attrs({ as: "section" })`
  width: 100%;
`;

const StyledHeroImage = styled(Image)`
  width: 100%;
  max-width: 648px;
  max-height: 364px;
  margin: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
`;

const TvshowHero = ({ photo }) => (
  <StyledHeroSection>
    <StyledHeroImage alt="tvshow poster" fluid={photo.fluid}></StyledHeroImage>
  </StyledHeroSection>
);

export default TvshowHero;
