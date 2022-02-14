import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export const global = createGlobalStyle`
  :root {
    font-size: 60% !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root, .App, #__next {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${colors.background};
    overflow-y: auto;
  }

  html {
    min-height: -webkit-fill-available;
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

  @media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;
