import React from "react";
import styled from "styled-components";
import { typeScale, margins } from "../utils";

const StyledStarringBlock = styled.p`
  width: 40%;
  font-style: normal;
  font-weight: normal;
  font-size: ${typeScale.paragraph};
  line-height: 1.6;
  color: ${(props) => props.theme.starringColor};
  padding-left: ${margins.m5};
`;

const StarringBlock = ({ castMembers }) => (
  <StyledStarringBlock>
    Starring {castMembers.slice(0, 10).join(", ")}
  </StyledStarringBlock>
);

export default StarringBlock;
