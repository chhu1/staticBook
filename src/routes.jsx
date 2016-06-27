import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { containers, components } from './components';

export default function (store) {
    function changePage() {
        const { dispatch } = store;
        const page = this.path.split('/')[0] || '';
        dispatch({ type: 'changePage', page: { page } });
    }

    return (
        <Route path="/" component={containers.Main}>
            <IndexRoute component={components.Login} />
            <Route path="login" component={components.Login} />
        </Route>
    );
}
