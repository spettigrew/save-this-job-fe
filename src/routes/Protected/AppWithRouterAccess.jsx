import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import RegisterForm from '../Signup/register';
import Login from '../Signup/Login';
import Dashboard from './dashboard'


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
            <SecureRoute path='/dashboard' component={Dashboard} />
            <Route path='/implicit/callback' component={LoginCallback} />
            <Route exact path="/register" component={RegisterForm} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-505664.okta.com' />} />
        </Security>
    );
};
export default AppWithRouterAccess;