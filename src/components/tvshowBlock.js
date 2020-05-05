import React from "react";
import styled from "styled-components";
import Box from "./box";
import { margins, typeScale } from "../utils";
import Rating from "./rating";
import StarringBlock from "./starringBlock";

const StyledMain = styled(Box).attrs({ as: "main" })`
  margin: ${margins.m7} 0 0 0;
`;

const StyledTitle = styled.h2`
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0.4px;
`;

const StyledSeasons = styled.span`
  color: ${(props) => props.theme.numberOfSeasonsColor};
  font-size: ${typeScale.paragraph};
  font-weight: normal;
  line-height: 21px;
  margin: 0 0 0 ${margins.m2};
`;

const StyledDescriptionSection = styled.section`
  display: flex;
`;

const StyledOverview = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${typeScale.paragraph};
  height: fit-content;
  color: ${(props) => props.theme.overviewColor};
  line-height: 1.6;
  border-left: 6px solid ${(props) => props.theme.accentColor};
  padding-left: ${margins.m3};
  width: 60%;
`;

const TvshowBlock = ({ title, rating, seasonCount, overview, castMembers }) => (
  <StyledMain>
    <StyledTitle>{title}</StyledTitle>
    <div>
      <Rating value={rating} />
      <StyledSeasons>{seasonCount} seasons</StyledSeasons>
    </div>
    <StyledDescriptionSection>
      <StyledOverview>{overview}</StyledOverview>
      <StarringBlock castMembers={castMembers}></StarringBlock>
    </StyledDescriptionSection>
  </StyledMain>
);

export default TvshowBlock;
