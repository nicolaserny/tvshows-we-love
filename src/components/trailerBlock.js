import React from "react";
import styled from "styled-components";
import { margins } from "../utils";

const StyledSection = styled.section`
  margin: ${margins.m6} 0 ${margins.m5} 0;
`;

const StyledTitle = styled.h3`
  color: ${(props) => props.theme.trailerTitleColor};
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0.4px;
`;

const StyledTrailer = styled.iframe`
  margin-top: ${margins.m3};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const TrailerBlock = ({ trailerKey }) => (
  <StyledSection>
    <StyledTitle>Trailer</StyledTitle>
    <StyledTrailer
      width="100%"
      title="Trailer"
      height="400"
      src={`https://www.youtube-nocookie.com/embed/${trailerKey}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></StyledTrailer>
  </StyledSection>
);

export default TrailerBlock;
