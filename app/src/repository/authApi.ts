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

export const AuthApilogin = async (email : string, password : string) : Promise<AuthRespoinse> => {
    const url = "/user.login";
    let obj = {
        'email' : email.toString(),
        'password' : password.toString(),
    }
    

    
 
    return {
        error: false,
        message : "message"
    };

}

