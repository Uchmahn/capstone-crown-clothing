import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  /* font-size: 10px */
  /* 10px / 16px  = 0.625 = 62.5%*/
  /* To set out default font size to 10px we set the font-size to 62.5% of 16px (default font-size) */
  /* So that 1 rem = 10px and not 16px for easier calculations when working with responsive units */
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 2rem 4rem;
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

`;
