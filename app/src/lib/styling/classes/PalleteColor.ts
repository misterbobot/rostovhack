
interface PalleteColorInteface{
    light : string;
    dark : string;
    main : string;
}

export default class PalleteColor implements PalleteColorInteface{
    light: string;
    dark: string;
    main: string;

    constructor(main : string, light ?: string|null , dark ?: string|null){
        
        light = light ? light : main;
        dark = dark ? dark : main;

        this.light = light;
        this.dark = dark;
        this.main = main
    }

}