import React from "react";
import styled from "styled-components";
import { margins } from "../utils";

const StyledSection = styled.section`
  margin: ${margins.m6} 0 ${margins.m7} 0;
`;

const StyledTitle = styled.h3`
  color: ${(props) => props.theme.trailerTitleColor};
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0.4px;
`;

const StyledTrailer = styled.iframe`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledTrailerContainer = styled.div`
  margin-top: ${margins.m3};
  height: 0;
  padding-top: 56%;
  width: 100%;
  position: relative;
`;

const TrailerBlock = ({ trailerKey }) => (
  <StyledSection>
    <StyledTitle>Trailer</StyledTitle>
    <StyledTrailerContainer>
      <StyledTrailer
        title="Trailer"
        src={`https://www.youtube-nocookie.com/embed/${trailerKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledTrailer>
    </StyledTrailerContainer>
  </StyledSection>
);

export default TrailerBlock;
