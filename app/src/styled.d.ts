import 'styled-components';
import { Color } from './lib/styling/classes/Color';
import { Header } from './lib/styling/classes/Header';

declare module "styled-components" {
    export interface DefaultTheme {
        typography: {
            htmlFontSize: string | number;
            fontFamily: string;
            fontSize: string;
            fontWeight: {
                light: number;
                regular: number;
                soso : number;
                medium: number;
                bold: number;
                black: number;
            };
            h1: Header;
            h2: Header;
            h3: Header;
            h4: Header;
            h5: Header;
            h6: Header;
        };
        palette: {
            primary: PaletteColor;
            secondary: PaletteColor;
            text: Color;
        error : Color;
        warning : Color;
        info: Color;
        background : Color;
        };
    }
}

interface Heading {
    fontFamily: string;
    fontWeight: number;
    fontSize: string | number;
    lineHeight: number;
    letterSpacing: string | number;
}

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}