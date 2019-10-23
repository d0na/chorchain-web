import logo from "../ChorChain_logo.png";
import {Layout, Menu} from "antd";
import React from "react";
import {Link} from "react-router-dom";

const {Header, Footer, Content} = Layout;

export function AppHeader() {
    return (
        <Header style={{height: 85}}>
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo"
                     style={{
                         width: 150, height: 52,
                         margin: '16px 24px 16px 0',
                         float: 'left'
                     }}/>
            </Link>
            <Menu
                // theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/modeler">Modeler</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/personal">PersonalPage</Link></Menu.Item>
            </Menu>
        </Header>
    )
}


export function AppFooter() {
    return <Footer>Footer</Footer>
}


export function AppContent(props) {
    return <Content style={{backgroundColor: 'white', marginLeft: 50, marginRight: 50}}>
        {/*<div style={{marginLeft: 50, marginRight: 50, backgroundColor: '#ededed'}}>*/}
        {props.children}
        {/*</div>*/}
    </Content>
}

export function AppLayout(props) {
    return <Layout style={{height: '95vh'}}>{props.children}</Layout>
}

