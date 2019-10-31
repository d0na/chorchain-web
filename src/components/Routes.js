import {Modeler} from "./Modeler/Modeler";
import {Home} from "./Home";
import React from "react";
import {Route, Switch} from "react-router-dom";
import {Deploy} from "./Deploy/Deploy";
import PrivateRoute from "./Authentication/PrivateRoute";
import Login from "./Login";
import Signup from "./Signup";

export function Routes() {

    return (
        <Switch>
            <PrivateRoute path="/deploy" component={Deploy}/>
            <PrivateRoute path="/design" component={Modeler}/>
            <Route path="/dapp"/>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}