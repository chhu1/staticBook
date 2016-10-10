import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import main from './main';
import register from './register';
import login from './login';
import container from './container';
import discovery from './discovery';

export default combineReducers({
    router: routerStateReducer,
    main,
    register,
    login,
    container,
    discovery
});
