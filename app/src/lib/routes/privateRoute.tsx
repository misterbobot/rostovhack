import {Route, RouteProps, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";    
import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { useAppDispatch, useAppSelector } from "../store/hooks";


type Props = { component: FunctionComponent } & RouteComponentProps;

export const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {  
    
    const user = useAppSelector((state) => state.user)

    const loggenIn = user.loggedIn;
    

    if (!loggenIn){
        alert(2)
        return <Redirect to="/login"/>;
    }
    return <Component {...rest} />
};


