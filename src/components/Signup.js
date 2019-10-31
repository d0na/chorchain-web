import React, {useState} from 'react';
import {Button, Form, Icon, Input, notification, Result, Row} from "antd";
import qs from 'querystring';
import axios from "axios";
import {Redirect} from "react-router-dom";
import {useAuth} from "./Authentication/context/auth";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const SignupForm = (props) => {

    const [isError, setIsError] = useState(false);
    const [isCreated, setCreated] = useState(false);
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    function postNewUser(props) {
        setIsError(false);
        setError("");

        const data = {
            address: address,
            password: password
        };
        axios.post('api2/signin',
            data,
            // {
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            // }
        )
            .then(result => {
                if (result.status === 201) {

                    notification['success']({
                        message: 'Created new user',
                        description:
                            `A new user with address ${address} was successfully created`,
                    });
                    setCreated(true);
                } else {
                    setIsError(true);
                    setError(result.data.message);
                }
            }).catch(e => {
            setIsError(true);
            setError(e.message);
        });
    }

    const {getFieldDecorator, getFieldsError} = props.form;

    if (isCreated) {
        return <Redirect to="/login"/>;
    }

    return (
        <div>
            <Result
                // style={{width:'100%',height:'100%'}}
                icon={<Icon type="user-add"/>}
                title="Register new user"
                // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            />
            <div
                style={{width: '50%', margin: '0 auto'}}
            >
                <Form id='loginForm' style={{width: '50%', margin: '0 auto'}}
                >
                    <FormItem>
                        {getFieldDecorator('address', {
                            rules: [{
                                required: true,
                                // message: 'login.form.message.username.required'
                            }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{fontSize: 13}}
                                />}
                                placeholder={'test address'}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true,
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder={'test'}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        )}
                    </FormItem>
                    {(isError) ? <div style={{color: 'red'}}>{error}</div> : ''}
                    {isError && console.log("ee ", JSON.stringify(error))}
                    <FormItem>
                        <Row style={{display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}
                                    onClick={postNewUser}>
                                Register
                            </Button>
                        </Row>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}
const Signup = Form.create()(SignupForm)

export default Signup;