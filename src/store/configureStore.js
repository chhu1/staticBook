import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import apis from '../middleware/apis';
import apiLists from '../middleware/apiLists';
import { createHistory } from 'history';
import rootReducer from '../reducers';

export default function configureStore(routes) {
    const finalCreateStore = compose(
        applyMiddleware(
            thunk,
            apis,
            apiLists
        ),
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
