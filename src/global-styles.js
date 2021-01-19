import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {

        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Ubuntu', Courier;

}


html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

}

    body {

        height: 100%;
        overflow-y: scroll;
    }
`;
