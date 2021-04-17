import { AbstractModel } from "../abstractModels";

export class BoardModel implements AbstractModel{

    toJson = () => {
        return ""
    }
    static fromJson : any = (json : string) => {
        return new BoardModel(1,"1","1")
    }

    fromJson = BoardModel.fromJson;

    id : number;
    name : string;
    desc : string;

    constructor(id : number, desc: string, name : string){
        
        this.id = id;
        this.desc = desc;
        this.name = name;

    }
   
    
}