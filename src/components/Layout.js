import logo from "../ChorChain_logo.png";
import {Avatar, Dropdown, Layout, Menu} from "antd";
import React, {useEffect, useState} from "react";
import {Link,useLocation} from "react-router-dom";
import * as axios from "axios";
import {useAuth} from "./Authentication/context/auth";

const {Header, Footer, Content} = Layout;

export function AppHeader() {

    const {isAuthenticated, setAuthenticated,user} = useAuth();
    let location = useLocation();
    const handleOnClick = () => {
        axios.post('api2/logout').then((result) => {
                console.log(" result", result)
                if (result.status === 200) {
                    setAuthenticated(false)
                }
            }
        );
    }



    console.log(" id",location)
    console.log(" user",user)

    return (
        <Header style={{
            height: 85,
            // width: '100%',
            // display: 'flex',
            backgroundColor: 'white',
            // justifyContent: "space-between"
        }}>
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo"
                     style={{
                         width: 150, height: 52,
                         margin: '16px 24px 16px 0',
                         float: 'left'
                     }}/>
            </Link>
            {isAuthenticated &&
            <div style={{float: 'right', marginRight: 50}}>
                <Dropdown overlay={<User user={user}/>}>
                    <Avatar>{user.address}</Avatar>
                </Dropdown>
            </div>}
            <Menu
                // theme="dark"
                style={{width:500}}
                mode="horizontal"
                defaultSelectedKeys={location.pathname}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="/design"><Link to="/design">Choreography Design</Link></Menu.Item>
                <Menu.Item key="/deploy"><Link to="/deploy">Choreography Deploy</Link></Menu.Item>
                <Menu.Item key="/dapp"><Link to="/dapp">Choreography Dapp Interaction</Link></Menu.Item>

            </Menu>

        </Header>
    )
}


export function AppFooter() {
    return <Footer>Footer</Footer>
}


export function AppContent(props) {
    return <Content style={{backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginTop: 20}}>
        {/*<div style={{marginLeft: 50, marginRight: 50, backgroundColor: '#ededed'}}>*/}
        {props.children}
        {/*</div>*/}
    </Content>
}

export function AppLayout(props) {
    return <Layout style={{height: '95vh'}}>{props.children}</Layout>
}


function User(props) {
    const {setAuthenticated} = useAuth();
    return (
        <Menu>
            <Menu.Item key="0" disabled>
                Address: {props.user.address}
            </Menu.Item>
            <Menu.Item key="1" disabled>
                Id: {props.user.id}
            </Menu.Item>
            <Menu.Item key="2" disabled>
                Created: {props.user.created}
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="" onClick={() => setAuthenticated(false)}>
                Logout
            </Menu.Item>
        </Menu>
    )
}

