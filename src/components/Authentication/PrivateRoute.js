import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "./context/auth";

function PrivateRoute({component: Component, ...rest}) {
    const {isAuthenticated} = useAuth();

    console.log(" Privateoruter",)


    const onRRender = (props) => {
        console.log("PrivateRoute isAuth ", isAuthenticated)
        return isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login"/>
        )
    }

    return (
        <Route
            {...rest}
            render={onRRender}
        />
    );
}

export default PrivateRoute;