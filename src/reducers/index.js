import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import main from './main';
import register from './register';

export default combineReducers({
    router: routerStateReducer,
    main,
    register
});
