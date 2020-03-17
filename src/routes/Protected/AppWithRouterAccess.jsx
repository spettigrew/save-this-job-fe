import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import RegisterForm from './RegisterForm';
import Home from './Home';
import Login from './Login';
import Dashboard from './dashboard'

import NavBar from './NavBar';

const AppWithRouterAccess = () => {
    const history = useHistory();
    const onAuthRequired = () => {
        history.push('/login');
    };

    return (
        <Security issuer='https://dev-505664.okta.com/oauth2/default'
            clientId='0oa4246ntis4ZkuTd4x6'
            redirectUri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}
            pkce={true} >
            <NavBar />
            <Route path='/' exact={true} component={Home} />
            <SecureRoute path='/dashboard' component={Dashboard} />
            <Route path='/implicit/callback' component={LoginCallback} />
            <Route exact path="/register" component={RegisterForm} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-505664.okta.com' />} />
        </Security>
    );
};
export default AppWithRouterAccess;