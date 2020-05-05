import React from "react";
import styled from "styled-components";
import Box from "./box";
import { margins, typeScale } from "../utils";
import Rating from "./rating";

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
  font-size: ${typeScale.header5};
  font-weight: normal;
  line-height: 21px;
  margin: 0 0 0 ${margins.m2};
`;

const TvshowBlock = ({ title, rating, seasonCount }) => (
  <StyledMain>
    <StyledTitle>{title}</StyledTitle>
    <div>
      <Rating value={rating} />
      <StyledSeasons>{seasonCount} seasons</StyledSeasons>
    </div>
  </StyledMain>
);

export default TvshowBlock;
