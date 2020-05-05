import React from "react";
import styled from "styled-components";
import { margins } from "../utils";

const StyledText = styled.h5`
  color: ${(props) => props.theme.ratingColor};
`;

const StyledBackground = styled.div`
  padding: ${margins.m1} ${margins.m3};
  background: ${(props) => props.theme.ratingBackground};
  display: inline-block;
  border-radius: 14px;
  border: 2px solid ${(props) => props.theme.ratingBorder};
`;

const Rating = ({ value }) => (
  <StyledBackground>
    <StyledText>{Math.round(value * 10)}%</StyledText>
  </StyledBackground>
);

export default Rating;
