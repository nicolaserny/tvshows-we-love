import React from "react";
import styled from "styled-components";
import { margins, device } from "../utils";

const StyledStarringBlock = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 1.6;
  color: ${(props) => props.theme.starringColor};
  padding-left: ${margins.m5};
  @media screen and (min-width: ${device.medium}) {
    width: 40%;
  }
`;

const StarringBlock = ({ castMembers }) => (
  <StyledStarringBlock>
    Starring {castMembers.slice(0, 10).join(", ")}
  </StyledStarringBlock>
);

export default StarringBlock;
