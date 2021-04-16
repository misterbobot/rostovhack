import { DefaultTheme } from "styled-components";
import PalleteColor from "./classes/PalleteColor";
import { palletePrimary, palleteSecondary, textColors, errorColor, warningColor, infoColor, backGroundColor } from './objects/colors';
import { H1, H2, H3, H4, H5, H6, fontFamily } from './objects/texts'



export const theme: DefaultTheme = {
    palette: {
        primary: palletePrimary,
        secondary: palleteSecondary,
        text : textColors,
        error: errorColor,
        warning: warningColor,
        info: infoColor,
        background : backGroundColor
    },
    typography: {
        htmlFontSize: "62.5%",
        fontFamily,
        fontWeight: {
            light: 300,
            regular: 400,
            soso : 500,
            medium: 600,
            bold: 700,
            black: 900
        },
        fontSize: "1.6rem",
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6
    }
};
