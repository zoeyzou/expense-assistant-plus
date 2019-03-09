import { createGlobalStyle } from './styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html, body, div#root {
    width: 100%;
    height: 100%;
  }
  
  html {
    font-size: 62.5%;
  }
  body {
    font-size: ${theme.fontSize.sm};
    background-color: ${theme.color.lightWhite};
  }
  * {
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;
