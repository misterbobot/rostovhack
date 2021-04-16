import { AbstractModel } from "../abstractModels";

export class CardModel implements AbstractModel{

    toJson = () => {
        return ""
    }
    static fromJson : any = (json : string) => {
        return new CardModel(1,"1")
    }

    fromJson = CardModel.fromJson;

    id : number;
    text : string;

    constructor(id : number, text: string){
        
        this.id = id;
        this.text = text;

    }
   
    

}