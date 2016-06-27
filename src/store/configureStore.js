import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : fun => fun
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}