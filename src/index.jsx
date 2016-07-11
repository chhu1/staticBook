import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import configureStore from './store/configureStore';
import routes from './routes';

import './static/css/common.scss';
import './vendor/flexible.js';
import 'babel-polyfill';
require('es6-promise').polyfill();

const store = configureStore(routes);

render(
    <Provider store={store}>
        <ReduxRouter>
            { routes }
        </ReduxRouter>
    </Provider>,
    document.getElementById('root')
);
