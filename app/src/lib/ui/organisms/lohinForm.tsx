import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../atoms/button";
import { IconInput } from "../molecules/iconInput";
import '../../../css/main.css'
import { AuthApilogin } from "../../../repository/authApi";
import { useAppDispatch } from "../../store/hooks";
import { useHistory } from "react-router-dom";

interface LoginFormProps{

    change : any,

}




export const LoginForm: React.FC<LoginFormProps> = ({change}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch()
    const history = useHistory();

    const handleEmailChange = (event : any) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event : any) => {
        setPassword(event.target.value);
    }

    const handlesumbit = (event : any) => {
        AuthApilogin(email,password,dispatch).then(
            response => {
                if (response.error){
                    alert("Ошибка: "+response.message)
                }else{
                    setEmail("")
                    setPassword("")
                    history.push("/boards")
                }
            }
        )

        
    }


  return (
    <div>
      <div className="title">Сделайте свою работу эффективнее</div>
      <div className="wrapper">
        <div className="win">
          <div className="header">
            <h2 className="TextInter active">Вход</h2>
            <h2 className="TextRegistration " onClick = {change}>Регистрация</h2>
            
            <div>&nbsp;</div>
          </div>
          <div className="main">
            <input
              type="text"
              value = {email}
              onChange = {handleEmailChange}
              className="email"
              placeholder="Введите адрес электронной почты или логин"
            />
            <input
              type="text"
              value = {password}
              onChange = {handlePasswordChange}
              className="password"
              placeholder="Введите пароль"
            />
          </div>
          <div className="footer">
            <button className="ForgetPassword" >Забыли пароль</button>
            <Button onClick = {(event) => handlesumbit(event)}>Войти</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
