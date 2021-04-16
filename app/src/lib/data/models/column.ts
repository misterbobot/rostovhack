import { CardModel } from "./cardModel";

export interface CardInterface{
    id : number,
    name : string
}

export class Column {

    list : CardModel[];
    name : string;
    id : number;

    constructor(list : CardModel[], name : string, id : number){
        
        this.list = list;
        this.name = name;
        this.id = id;

    }

    static fromJson = (json : string) => {
        console.log(json);
        
        const obj = JSON.parse(json);
        let list : CardModel[] = [];
        obj.cards.forEach((card : CardInterface) => {
            list.push(new CardModel(card.id,card.name))
        });

        return new Column(list, obj.name, obj.id);
        
    }

}