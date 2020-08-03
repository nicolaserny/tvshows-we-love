import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { typeScale, typeScaleSmall, typeScaleMedium } from "./typography";
import { neutral } from "./colors";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: fallback;
        src: url("/fonts/montserrat-v14-latin-regular.woff2") format("woff2"),
          url("/fonts/montserrat-v14-latin-regular.woff") format("woff");
    }
    @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-display: fallback;
    src: url("/fonts/montserrat-v14-latin-600.woff2") format("woff2"),
        url("/fonts/montserrat-v14-latin-600.woff") format("woff");
    }
    @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    src: url("/fonts/montserrat-v14-latin-700.woff2") format("woff2"),
        url("/fonts/montserrat-v14-latin-700.woff") format("woff");
    }
    @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    src: url('/fonts/lora-v16-latin-700.woff2') format('woff2'),
        url('/fonts/lora-v16-latin-700.woff') format('woff');
    }
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
            font-size: ${typeScaleMedium.paragraph};
        }
        @media screen and (min-width: ${device.large}) {
            font-size: ${typeScale.paragraph};
        }
    }
    h1 {
        margin: 0;
        font-size: ${typeScaleSmall.header1};
        @media screen and (min-width: ${device.small}) {
            font-size: ${typeScaleSmall.header2};
        }
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScaleMedium.header1};
        }
        @media screen and (min-width: ${device.large}) {
            font-size: ${typeScale.header1};
        }

    }
    h2 {
        margin: 0;
        font-size: ${typeScaleSmall.header2};
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScaleMedium.header2};
        }
        @media screen and (min-width: ${device.large}) {
            font-size: ${typeScale.header2};
        }
    }
    h3 {
        margin: 0;
        font-size: ${typeScaleSmall.header3};
        @media screen and (min-width: ${device.medium}) {
            font-size: ${typeScaleMedium.header3};
        }
        @media screen and (min-width: ${device.large}) {
            font-size: ${typeScale.header3};
        }
    }
`;
