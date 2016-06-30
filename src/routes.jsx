import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { containers, components } from './components';

module.exports = (
    <Route path="/" component={containers.Main}>
        <IndexRoute component={components.Login} />
        <Route path="login" component={components.Login} />
    </Route>
);