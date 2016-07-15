import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import main from './main';
import register from './register';
import login from './login';

export default combineReducers({
    router: routerStateReducer,
    main,
    register,
    login
});
