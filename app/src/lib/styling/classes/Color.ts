interface ColorInterface{
    main : string;
    get(target:any,name : string) : string;
    set(target:any,name:string, value : string) : boolean;
    [key: string]: any;
    
}

interface OtherColorInterface{
    propName : string, 
    propValue : string
}

/**
 * @class Color
 *
 * @description Class to contain information about custom color
 * 
 */

export class Color implements ColorInterface{
    main:string;
    constructor(main : string, others : Array<OtherColorInterface> | null = null){
        this.main = main;
        if (others){
            others.forEach(color => {
                this[color.propName] = color.propValue;
            });
        }
        return new Proxy(this, this);
    }
    [key: string]: any;
    
    
    get(target:any,name : string) : string{
        return this[name] || this.main;
    }

    set(target:any,name:string, value : string) : boolean{
        this[name] = value;
        return true;
    }
    /**
     * Function to check if the object have prop
     * @param { string } propName - Name of the prop
     */
    haveProp(propName : string) : boolean{
        if (this[propName]){
            return true;
        }
        return false;
    }

}

