import {createGlobalStyle, css} from "styled-components";
import { theme } from "./theme";



const fonts = css`
    
`;

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-size: ${({theme}) => theme.typography.htmlFontSize};
      font-family : ${theme.typography.fontFamily}
    }
    
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    body {
      ${({theme}) => css`
        color: ${theme.palette.text.primary};
        font-size: ${theme.typography.fontSize};
        font-weight: ${theme.typography.fontWeight.medium};
        font-family: ${theme.typography.fontFamily};
      `};
    }
    
    .select-option {
      ${({theme}) => css`
        background-color: ${theme.palette.primary.main}!important;
      `}
    }
    
    ${fonts};
`;