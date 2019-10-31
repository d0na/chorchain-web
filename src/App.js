import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import {Routes} from "./components/Routes";
import {AppContent, AppHeader, AppLayout} from "./components/Layout";
import {AuthContext} from "./components/Authentication/context/auth";
// import './interceptor'

//TODO remove
//https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
//https://medium.com/@ni3t/reacts-usestate-and-context-for-auth-routing-78347da1d6f


function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    return (
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated, user, setUser}}>
            <Router>
                <AppLayout>
                    <AppHeader/>
                    <AppContent>
                        <Routes/>
                    </AppContent>
                </AppLayout>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;

