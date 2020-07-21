import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "../utils";
import "typeface-lora";
import "typeface-montserrat";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
