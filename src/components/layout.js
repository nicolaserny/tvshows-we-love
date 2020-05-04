import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, device } from "../utils";

const Wrapper = styled.div`
  max-width: 100vw;
  margin: 0;
  display: grid;
  grid-gap: 5px;

  @media screen and ${device.large} {
    grid-template-columns: auto minmax(min-content, 940px) auto;
    grid-auto-rows: minmax(50px, auto);
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Wrapper>{children}</Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
