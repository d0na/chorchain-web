import {Modeler} from "./Modeler/Modeler";
import {Home} from "./Home";
import React from "react";
import {Route, Switch} from "react-router-dom";

export function Routes() {

    return (
        <Switch>
            <Route path="/dapp"/>
            <Route path="/deploy"/>
            <Route path="/design">
                <Modeler/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}