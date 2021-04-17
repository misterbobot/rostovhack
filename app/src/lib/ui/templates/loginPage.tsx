import React, { useState } from "react";
import { LoginBackground } from "../molecules/loginBackground";
import { LoginForm } from "../organisms/lohinForm";
import { NavBar } from "../organisms/navbar";
import { RegisterForm } from "../organisms/registerForm";

enum pageState{
    login,
    register
}



export const LoginPage : React.FC = () => {

    const [page, changePage] = useState(pageState.login)

    const gotoReg = () => {
        changePage(pageState.register)
    }

    const gotoLog = () => {
        changePage(pageState.login)
    }

    return <>
        <NavBar hidden = {true}></NavBar>
        <LoginBackground></LoginBackground>
        {page == pageState.login ? <LoginForm change = {gotoReg}></LoginForm>:<RegisterForm change = {gotoLog}></RegisterForm>}
    </>

}

