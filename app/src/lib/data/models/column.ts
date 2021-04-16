import { CardModel } from "./cardModel";

export class Column {

    list : CardModel[];
    name : string;

    constructor(list : CardModel[], name : string){
        
        this.list = list;
        this.name = name;

    }

}