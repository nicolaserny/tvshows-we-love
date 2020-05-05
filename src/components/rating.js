import React from "react";
import styled from "styled-components";
import { margins, typeScale } from "../utils";

const StyledText = styled.span`
  color: ${(props) => props.theme[`ratingColor${props.opinion}`]};
  font-weight: bold;
  font-size: ${typeScale.paragraph};
  line-height: 21px;
  margin: 0;
`;

const StyledBackground = styled.div`
  padding: ${margins.m1} ${margins.m3};
  background: ${(props) => props.theme[`ratingBackground${props.opinion}`]};
  display: inline-block;
  border-radius: 14px;
  border: 2px solid ${(props) => props.theme[`ratingBorder${props.opinion}`]};
`;

const Rating = ({ value }) => {
  const opinion = value >= 8 ? "Great" : "Good";
  return (
    <StyledBackground opinion={opinion}>
      <StyledText opinion={opinion}>{Math.round(value * 10)}%</StyledText>
    </StyledBackground>
  );
};

export default Rating;
