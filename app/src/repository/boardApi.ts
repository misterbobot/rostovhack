import { Column } from "../lib/data/models/column";
import {A, setAuthorizationHeader} from "../repository/default"




interface BoardInfoResponse{
    error : boolean,
    response : {
        columns : Column[],
        name : string
    }
}

/**
 * @function getBoard
 *
 * @description Function to get the full board data
 * 
 */

export const getBoard = async (boardId : number) : Promise<BoardInfoResponse> => {
    const url = "/boards/get/"+boardId.toString();
    let obj = {
        
    }
    

    
 
    return {
        error: false,
        response : {
            name : "Тестовая доска",
            columns: [
                Column.fromJson('{"name" : "TODO","id" : 1, "cards" : [{"id" : 1, "name" : "test1"},{"id" : 2, "name" : "test2"}] }'),
                Column.fromJson('{"name" : "DONW","id" : 2, "cards" : [{"id" : 3, "name" : "test3"},{"id" : 4, "name" : "test4"}] }')
            ]
        }
    };

}

