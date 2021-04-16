import styled, {css} from "styled-components";
import { textColors } from '../../styling/objects/colors'

export enum HeaderColors{
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    main = "main",
    error = "error"
}

interface HeadingProps {
    align?: "left" | "center" | "right";
    uppercase?: boolean;
    color ?: HeaderColors;
}

const mixins = (props: HeadingProps) => css`
    color : ${props.color ? textColors.get(textColors,props.color) : textColors.get(textColors,"main")};
    text-align: ${props.align};
    text-transform: ${props.uppercase && "uppercase"};
    margin-bottom: 0;
`;

export const H1 = styled.h1<HeadingProps>`
    ${({theme}) => () => theme.typography.h1.getCss()};
    ${mixins};
`;

export const H2 = styled.h2<HeadingProps>`
    ${({theme}) => () => theme.typography.h2.getCss()};
    ${mixins};
`;

export const H3 = styled.h3<HeadingProps>`
    ${({theme}) => () => theme.typography.h3.getCss()};
    ${mixins};
`;

export const H4 = styled.h4<HeadingProps>`
    ${({theme}) => () => theme.typography.h4.getCss()};
    ${mixins};
`;

export const H5 = styled.h5<HeadingProps>`
    ${({theme}) => () => theme.typography.h5.getCss()};
    ${mixins};
`;

export const H6 = styled.h6<HeadingProps>`
    ${({theme}) => () => theme.typography.h6.getCss()};
    ${mixins};
`;