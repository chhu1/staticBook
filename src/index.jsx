import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import createRoutes from './routes';

import './static/css/common.scss';

const store = configureStore();
const history = useRouterHistory(createHashHistory)();

render(
    <Provider store={store}>
        <Router history={history} routes={createRoutes(store)} />
    </Provider>,
    document.getElementById('root')
);
