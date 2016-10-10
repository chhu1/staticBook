import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { containers, components } from './components';
import { getCookieValue } from './utils/cookie';

function checkTokenInCookie(nextState, replace) {
    let token = getCookieValue('token');
    let userId = getCookieValue('userId');
    (!token || !userId) && (replace('/login'));
}

module.exports = (
    <Route path="/" component={containers.Main}>
        <IndexRoute component={components.Login} />
        <Route path="login" component={components.Login} />
        <Route path="register" component={components.Register} />
        <Route component={containers.Container}>
            <Route path="discovery" onEnter={checkTokenInCookie} component={components.Discovery} />
            <Route path="news" onEnter={checkTokenInCookie} component={components.News} />
            <Route path="mine" onEnter={checkTokenInCookie} component={components.Mine} />
        </Route>
    </Route>
);
