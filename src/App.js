import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import {Routes} from "./components/Routes";
import {AppContent, AppHeader,AppLayout} from "./components/Layout";

function App() {
    return (
        <Router>
            <AppLayout>
                <AppHeader/>
                <AppContent>
                    <Routes/>
                </AppContent>
            </AppLayout>
        </Router>
    );
}

export default App;



