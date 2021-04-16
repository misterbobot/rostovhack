import { Color } from "../classes/Color";
import PalleteColor from "../classes/PalleteColor";

const palletePrimary = new PalleteColor(
    "#2071DE",
    "#2F80ED",
    "#1E5EB5"
);

const palleteSecondary = new PalleteColor(
    "#DBDBDB",
    "#BDBDBD",
    "#9A9A9A"
);

const textColors = new Color(
    "#FFFFFF",
    [
        {
            propName : "primary",
            propValue: "#ffff"
        },
        {
            propName : "secondary",
            propValue : "#000000"
        },
        {
            propName : "tertiary",
            propValue : "#2F80ED"
        },
        {
            propName : "error",
            propValue : "#D22C2C"
        },
        {
            propName : "disabled",
            propValue : ""
        }
    ]
);

const errorColor = new Color(
    "#B12525"
)

const warningColor = new Color(
    "#FDCEC0"
)

const infoColor = new Color(
    "#000000"
)

const backGroundColor = new Color(
    "#000000",
    [
        {
            propName : "secondary",
            propValue: "#F1FAF8"
        },
    ]
)




export {palletePrimary , palleteSecondary, textColors, errorColor, warningColor, infoColor,backGroundColor}



