import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { getCookieValue } from './utils/cookie';
import Main from './app/containers/Main/Main';
import Container from './app/containers/Container/Container';
import BookContainer from './app/containers/BookContainer/BookContainer';
import Login from './app/pages/Login/Login';

function checkTokenInCookie(nextState, replace) {
    let token = getCookieValue('token');
    let userId = getCookieValue('userId');
    (!token || !userId) && (replace('/login'));
}

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="register" getComponent={
            (nextState, callback) =>{
                require.ensure([], (require) => {
                    callback(null, require('./app/pages/Register/Register').default)
                })
            }
        } />
        <Route component={Container}>
            <Route path="discovery" onEnter={checkTokenInCookie} getComponent={
                (nextState, callback) =>{
                    require.ensure([], (require) => {
                        callback(null, require('./app/pages/Discovery/Discovery').default)
                    })
                }
            } />
            <Route path="news" onEnter={checkTokenInCookie} getComponent={
                (nextState, callback) =>{
                    require.ensure([], (require) => {
                        callback(null, require('./app/pages/News/News').default)
                    })
                }
            } />
            <Route path="mine" onEnter={checkTokenInCookie} getComponent={
                (nextState, callback) =>{
                    require.ensure([], (require) => {
                        callback(null, require('./app/pages/Mine/Mine').default)
                    })
                }
            } />
        </Route>
        <Route path="bookcontainer/" component={BookContainer}>
            <Route path="addbook" onEnter={checkTokenInCookie} getComponent={
                (nextState, callback) =>{
                    require.ensure([], (require) => {
                        callback(null, require('./app/pages/AddBook/AddBook').default)
                    })
                }
            } />
        </Route>
    </Route>
);
