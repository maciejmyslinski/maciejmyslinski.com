import { createGlobalStyle } from 'styled-components';

export const StylesGlobal = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Averta', sans-serif;
    font-size: 1.6rem;
    line-height: 1.42;
    color: rgba(0, 0, 0, .87);
  }

  *, *:after, *:before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #1C7BB0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #125D87;
    }
  }
`;
