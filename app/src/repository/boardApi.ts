import { Column } from "../lib/data/models/column";
import { useAppDispatch } from "../lib/store/hooks";
import { addcard, changecolumntitle, createColumn } from "../lib/store/slices/boardSlice";
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
                Column.fromJson('{"name" : "DONW","id" : 2, "cards" : [{"id" : 3, "name" : "test3"},{"id" : 4, "name" : "test4"}] }'),
            ]
        }
    };

}

/**
 * @function AddCardApi
 *
 * @description Function to add the card to the column
 * @param column : Column id
 * 
 */

export const AddCardApi = async (column : number, dispatch: any) : Promise<void> => {
    
    //TODO call api


    let id = await 10;

    dispatch(addcard({
        id : id,
        columnid : column
    }))

    return 
   
}


/**
 * @function updateColumnTitle
 *
 * @description Function to update the column title
 * @param column : Column id
 * 
 */

 export const updateColumnTitle = async (column : number,title : string, dispatch: any) : Promise<void> => {
    
    //TODO call api


    dispatch(changecolumntitle({
        text : title,
        columnid : column
    }))

    return 
   
}

/**
 * @function createColumnApi
 *
 * @description Function tocreate the column
 * 
 */

 export const createColumnApi = async (dispatch: any) : Promise<void> => {
    
    //TODO call api

    let createdId = await 4;

    dispatch(createColumn(createdId))

    return 
   
}

