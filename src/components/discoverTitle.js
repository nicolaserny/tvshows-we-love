import React from "react";
import styled from "styled-components";

const DiscoverBlock = styled.div`
  grid-column: 5 / span 3;
  grid-row: 4;
`;

const StyledDiscoverH1 = styled.h1`
  font-family: ${(props) => props.theme.secondaryFont};
  font-style: normal;
  font-weight: bold;
  color: ${(props) =>
    props.theme[`discoverTitle${props.accent ? "Accent" : "Default"}Color`]};
`;

const DiscoverTitle = () => (
  <DiscoverBlock>
    <StyledDiscoverH1>Discover</StyledDiscoverH1>
    <StyledDiscoverH1 accent={true}>Popular TV Shows</StyledDiscoverH1>
  </DiscoverBlock>
);

export default DiscoverTitle;
