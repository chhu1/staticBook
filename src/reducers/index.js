import { combineReducers } from 'redux';
import main from './main';
import { routerStateReducer } from 'redux-router';

export default combineReducers({
    router: routerStateReducer,
    main
});