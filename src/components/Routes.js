import {ModelerViewer} from "./ModelerViewer";
import {Home} from "./Home";
import React from "react";
import {Route, Switch} from "react-router-dom";

export function Routes() {

    return (
        <Switch>
            <Route path="/about"/>
            <Route path="/modeler">
                <ModelerViewer/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}