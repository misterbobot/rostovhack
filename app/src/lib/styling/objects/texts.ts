import { Header } from '../classes/Header'

export const fontFamily = "Montserrat";

const H1 = new Header(
    fontFamily,
    700,
    "5rem",
    1.167,
    "-0.01562em"
)

const H2 = new Header(
    fontFamily,
    700,
    "3.5rem",
    1.2,
    "-0.00833em"
)

const H3 = new Header(
    fontFamily,
    700,
    "2.6rem",
    1.167,
    "0em"
)

const H4 = new Header(
    fontFamily,
    600,
    "2.125rem",
    1.235,
    "0.00735em"
)

const H5 = new Header(
    fontFamily,
    500,
    "1.5rem",
    1.334,
    "0em"
)

const H6 = new Header(
    fontFamily,
    500,
    "1.25rem",
    1.6,
    "0.0075em"
)

export { H1 , H2, H3, H4, H5, H6 }

