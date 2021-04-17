import { login } from '../lib/store/slices/userSlice';
import {A, setAuthorizationHeader} from '../repository/default'

interface AuthRespoinse{
    error : boolean,
    message : string,
    token ?: string,
}

/**
 * @function login
 *
 * @description Function to get log into the account
 * 
 */

export const AuthApilogin = async (email : string, password : string, dispatch : any = null) : Promise<AuthRespoinse> => {
    const url = "/user.login";
    let obj = {
        'email' : email.toString(),
        'password' : password.toString(),
    }
    
    if (obj.password != "1234"){
        return {
            error: true,
            message : "неверный пароль"
        };
    }

    if (dispatch){
        dispatch(login(
            {
                email : email,
                password : password
            }
        ))
    }
 
    return {
        error: false,
        message : "message"
    };

}

