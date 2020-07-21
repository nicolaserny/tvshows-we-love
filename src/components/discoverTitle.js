import React from "react";
import styled from "styled-components";
import { device, margins } from "../utils";

const DiscoverBlock = styled.div`
  grid-column: span 3;
  grid-row: 3;
  align-self: center;
  margin-bottom: ${margins.m2};
  @media screen and (min-width: ${device.small}) {
    grid-column: 4 / span 2;
    grid-row: 3;
  }
  @media screen and (min-width: ${device.medium}) {
    grid-column: 4 / span 3;
    grid-row: 3;
  }
  @media screen and (min-width: ${device.large}) {
    grid-column: 5 / span 3;
    grid-row: 4;
  }
`;

const StyledDiscoverH1 = styled.h1`
  font-family: ${(props) => props.theme.secondaryFont};
  font-style: normal;
  font-weight: 700;
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
