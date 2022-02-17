import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export const global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root, .App, #__next {
    height: 100%;
    width: 100%;
  }

  html, body {
    font-size: 10px;

    background: ${colors.background};
    color: ${colors.text};

    @media screen and (min-width: 481px) and (max-width: 840px) and (orientation: landscape) {
        font-size: 1.2vw;
    }

    @media screen and (min-width: 481px) and (max-width: 840px) and (max-aspect-ratio: 4 / 3) {
        font-size: 1vw;
    }
  }

  body,
  input,
  button,
  textarea {
    font: 400 1.6rem Roboto;
    color: ${colors.text};
  }

  button:hover {
    cursor: pointer;
  }
`;
