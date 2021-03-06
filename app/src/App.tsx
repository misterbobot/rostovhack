import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppRoutes} from "./lib/routes/Routes";
import {GlobalStyle} from "./lib/styling";


const App: React.FC = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <AppRoutes/>
  </>
);

export default App;