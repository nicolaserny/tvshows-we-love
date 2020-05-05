import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { typeScale } from "./typography";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.primaryFont};
        color: ${(props) => props.theme.primaryColor};
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
    h5 {
        font-size: ${typeScale.header5};
        margin: 0;
    }
`;
