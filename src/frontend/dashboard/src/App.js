import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';
import { Spin } from './components/'

const App = () => {
    const { auth } = useSelector(state => state.auth);
    const routeList = [];

    if (auth) {
        routeList.push(<Route path="/admin" render={(props) => <AdminLayout {...props} />} />);
        routeList.push(<Redirect from="/" to="/admin" />)
    } else {
        routeList.push(<Route path="/auth" render={(props) => <AuthLayout {...props} />} key="auth" />);
        routeList.push(<Redirect from="/" to="/auth/login" />)
    }

    return (
        <React.StrictMode>
            <Spin>
                <BrowserRouter>
                    <Switch>
                        {routeList}
                    </Switch>
                </BrowserRouter>
            </Spin>
        </React.StrictMode>);
}

export default App
