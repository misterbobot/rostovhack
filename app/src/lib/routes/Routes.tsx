import React from "react";
import { Switch, Route } from "react-router-dom";
import { BoardPage } from "../pages/boardPage";
import { loginPage } from "../pages/loginPage";
import { Test } from "../pages/test";
import { PrivateRoute } from './privateRoute'

// PAGES:


export const AppRoutes: React.FC = () => (
    <Switch>
            <Route path="/test" component={Test} exact />
            <Route path="/login" component={loginPage} exact />
            <PrivateRoute path="/board/:id" component = {BoardPage}></PrivateRoute>
    </Switch>
);