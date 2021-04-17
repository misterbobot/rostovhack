import { BoardModel } from "../lib/data/models/boardModel";
import { getBoards } from "../lib/store/slices/boardsSlice";

/**
 * @function getBoard
 *
 * @description Function to get the full board data
 * 
 */




interface GetBoardsResponse{
    error : boolean,
    boards : BoardModel[]
}

 export const getBoardsApi = async (dispatch : any = null) : Promise<GetBoardsResponse> => {
    const url = "/boards/get/";
    let obj = {
        
    }

    let recived = [
        new BoardModel(1, "Тестовая доска для управления крутейшим проектом","Тест №1"),
        new BoardModel(2, "Тестовая доска для управления крутейшим проектом","Тест №2"),
        new BoardModel(3, "Тестовая доска для управления крутейшим проектом","Тест №3"),
    ];

    if (dispatch){
        dispatch(
            getBoards(
                {
                    boards : recived
                }
            )
        )
    }

    return {
        error : false,
        boards : recived
    }

}