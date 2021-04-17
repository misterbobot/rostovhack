import React from "react";
import { Switch, Route } from "react-router-dom";
import { BoardPage } from "../pages/boardPage";
import { BoardsPage } from "../pages/boardsPage";
import { loginPage } from "../pages/loginPage";
import { Test } from "../pages/test";
import { WorkSpacePage } from "../pages/workspacePage";
import { PrivateRoute } from './privateRoute'

// PAGES:


export const AppRoutes: React.FC = () => (
    <Switch>
            <Route path="/test" component={Test} exact />
            <Route path="/login" component={loginPage} exact />
            <PrivateRoute path="/board/:id" component = {BoardPage}></PrivateRoute>
            <PrivateRoute path="/boards" component = {BoardsPage}></PrivateRoute>
            <PrivateRoute path="/workspace" component = {WorkSpacePage}></PrivateRoute>
    </Switch>
);