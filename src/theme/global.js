import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

import colors from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;    
  }

  *:focus {
    outline: 0;
  }

  body, #root {    
    width: 100%;
    min-height: 100vh;    

    font-size: 2rem;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.background};

    ${media.lessThan("small")`    
      font-size: 1.2rem;
    `}
  }
`;
