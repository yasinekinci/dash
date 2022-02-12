import React from 'react'
import { Layout, Col, Row } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from 'pages/auth/Login'
import Register from 'pages/auth/Register'
import Forgot from 'pages/auth/Forgot'
import 'pages/auth/auth.css'

const Auth = () => {
    return (
        <Layout className="layoutClass">
            <Row align="middle">
                <Col xs={6} offset={5}>
                    <Switch>
                        <Route
                            path='/auth/login'
                            component={Login}>
                        </Route>
                        <Route
                            path={"/auth/register"}
                            component={Register}>
                        </Route>
                        <Route
                            path={"/auth/forgot"}
                            component={Forgot}>
                        </Route>
                        <Redirect from="/" to="/auth/login" />
                    </Switch>
                </Col>
                <Col xs={8} className="LoginRightBg" offset={5}></Col>
            </Row>
        </Layout>
    )
}

export default Auth
