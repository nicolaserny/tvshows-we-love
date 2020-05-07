import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { typeScale } from "./typography";
import { neutral } from "./colors";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.primaryFont};
        color: ${(props) => props.theme.primaryColor};
          background: ${neutral[100]};

    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
    }
    h2 {
        font-size: ${typeScale.header2};
        margin: 0;
    }
`;
