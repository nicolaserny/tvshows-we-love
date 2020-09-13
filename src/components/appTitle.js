import React from "react";
import styled from "styled-components";
import { margins } from "../utils";
import { typeScale, typeScaleSmall, typeScaleMedium, device } from "../utils";

const StyledSpan = styled.span`
  margin: 0;
  font-size: ${typeScaleSmall.header3};
  @media screen and (min-width: ${device.medium}) {
      font-size: ${typeScaleMedium.header3};
  }
  @media screen and (min-width: ${device.large}) {
      font-size: ${typeScale.header3};
  }
  color: ${(props) => props.theme.primaryColor};
  font-style: normal;
  font-weight: 600;
`;

const StyledSvgIcon = styled.svg`
  height: 1em;
  top: 0.125em;
  position: relative;
  path {
    fill: ${(props) => props.theme.primaryColor};
  }
`;

const StyledIconWrapper = styled.div`
  display: inline-flex;
  align-self: center;
  margin-left: ${margins.m1};
`;

const AppTitle = () => (
  <StyledSpan>
    TV Shows we
    <StyledIconWrapper>
      <StyledSvgIcon
        viewBox="0 0 33 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31.35 6.247a9.395 9.395 0 00-2.055-2.992 9.553 9.553 0 00-3.036-2.005 9.588 9.588 0 00-3.7-.733A9.65 9.65 0 0016.5 2.652 9.65 9.65 0 0010.44.517a9.587 9.587 0 00-3.7.733 9.533 9.533 0 00-3.035 2.005A9.338 9.338 0 00.891 9.93c0 1.203.245 2.457.733 3.733.408 1.066.994 2.171 1.742 3.288 1.185 1.767 2.814 3.61 4.838 5.477 3.353 3.097 6.674 5.236 6.815 5.323l.856.55c.38.241.867.241 1.247 0l.856-.55c.14-.09 3.458-2.226 6.814-5.323 2.024-1.868 3.653-3.71 4.839-5.477.748-1.117 1.337-2.222 1.741-3.288.488-1.276.734-2.53.734-3.733a9.2 9.2 0 00-.755-3.682z" />
      </StyledSvgIcon>
    </StyledIconWrapper>
  </StyledSpan>
);

export default AppTitle;
