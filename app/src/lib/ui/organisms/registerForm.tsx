import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/button";
import { IconInput } from "../molecules/iconInput";
import '../../../css/main.css'

interface RegisterFormProps{

    change : any,

}




export const RegisterForm: React.FC<RegisterFormProps> = ({change}) => {
  return (
    <div>
      <div className="title">Сделайте свою работу эффективнее</div>
      <div className="wrapper">
        <div className="win">
          <div className="header">
            
            <h2 className="TextRegistration active" >Регистрация</h2>
            <h2 className="TextInter " onClick = {change}>Вход</h2>
            
            <div>&nbsp;</div>
          </div>
          <div className="main">
            <input
              type="text"
              className="email"
              placeholder="Введите адрес электронной почты или логин"
            />
            <input
              type="text"
              className="password"
              placeholder="Введите пароль"
            />
          </div>
          <div className="footer">
            <button className="ForgetPassword" >Создать аккаунт</button>
            <Button >Зарегистироваться</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
