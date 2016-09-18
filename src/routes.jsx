import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { containers, components } from './components';

module.exports = (
    <Route path="/" component={containers.Main}>
        <IndexRoute component={components.Login} />
        <Route path="login" component={components.Login} />
        <Route path="register" component={components.Register} />
        <Route component={containers.Container}>
            <Route path="discovery" component={components.Discovery} />
            <Route path="news" component={components.News} />
            <Route path="mine" component={components.Mine} />
        </Route>
    </Route>
);
