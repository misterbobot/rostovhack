import React from "react";
import { Switch, Route } from "react-router-dom";
import { Test } from "../pages/test";
import { PrivateRoute } from './privateRoute'

// PAGES:


export const AppRoutes: React.FC = () => (
    <Switch>
         <Route path="/test" component={Test} exact />
    </Switch>
);