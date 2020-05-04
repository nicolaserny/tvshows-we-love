import React from "react";
import styled from "styled-components";
import Box from "./box";
import { margins } from "../utils";

const StyledMain = styled(Box).attrs({ as: "main" })`
  margin: ${margins.m7} 0 0 0;
`;

const TvshowBlock = ({ title }) => (
  <StyledMain>
    <h2>{title}</h2>
  </StyledMain>
);

export default TvshowBlock;
