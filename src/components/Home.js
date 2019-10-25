import React from 'react';
import Login from "./Login";
import {Button, Card, Col, Row} from "antd";
import {Link} from "react-router-dom";

export function Home() {
    return <div>
        <Login user={'0xE217F7b9EBDC734c287ECa2E981D3B93cE90B2dfD'}/>
        <h1>Welcome to ChorChain</h1>

        <p>Introduction to ChorChain plattaform </p>

        <Button>Learn more</Button><Button>About</Button>

        <div style={{background: '#ECECEC', padding: '30px',marginTop:30}}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Design" bordered={false} style={{textAlign: 'center'}}>
                        <p> Design your bpmn coreography model</p>
                        <Link to={'/design'}><Button>Design</Button></Link>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Design" bordered={false} style={{textAlign: 'center'}}>
                        <p> Deploy your bpmn coreography model</p>
                        <Link to={'/deploy'}><Button>Deploy</Button></Link>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Dapp Interaction" bordered={false} style={{textAlign: 'center'}}>
                        <p> Interact with your bpmn coreography dapp </p>
                        <Link to={'/dapp'}><Button>Dapp interaction</Button></Link>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
}