import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { typeScale, typeScaleSmall } from "./typography";
import { neutral } from "./colors";
import { device } from "./device";

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
    p span {
        font-size: ${typeScaleSmall.paragraph};
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScale.paragraph};
        }

    }
    h1 {
        margin: 0;
        font-size: ${typeScaleSmall.header1};
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScale.header1};
        }

    }
    h2 {
        margin: 0;
        font-size: ${typeScaleSmall.header2};
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScale.header2};
        }
    }
    h3 {
        margin: 0;
        font-size: ${typeScaleSmall.header3};
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScale.header3};
        }
    }
`;
