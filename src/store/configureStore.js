import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import { createHistory } from 'history';
import rootReducer from '../reducers';

export default function configureStore(routes) {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        reduxReactRouter({
            routes,
            createHistory
        }),
        window.devToolsExtension ? window.devToolsExtension() : fun => fun
    )(createStore);

    const store = finalCreateStore(rootReducer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
