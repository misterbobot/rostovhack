import { Heading } from '../../../styled';
import { css, FlattenSimpleInterpolation } from 'styled-components'

/**
 * Class representing html header
 */

export class Header implements Heading{
    /**
     * Create a Header.
     * @param { string } fontFamily - Header font family
     * @param { number } fontWeight - Header font weight
     * @param { string | number } fontSize - Header font size
     * @param { number } lineHeight - Header line height
     * @param { string | number } letterSpacing -Header letter spacing
     */
    constructor(fontFamily : string, fontWeight: number, fontSize: string | number, lineHeight : number, letterSpacing: string | number ){

        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.lineHeight = lineHeight;
        this.letterSpacing = letterSpacing;
        
    }

    /**
     * Function to get header css
     */
    getCss() : FlattenSimpleInterpolation {
        return css`
            font-family : ${this.fontFamily};
            font-weight : ${this.fontWeight};
            font-size : ${this.fontSize};
            line-height : ${this.lineHeight};
            letter-spacing : ${this.letterSpacing};
        `
    }

    fontFamily: string;
    fontWeight: number;
    fontSize: string | number;
    lineHeight: number;
    letterSpacing: string | number;
}