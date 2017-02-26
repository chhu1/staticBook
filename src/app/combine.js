import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import main from './containers/Main/reducer';
import container from './containers/Container/reducer';
import register from './pages/Register/reducer';
import login from './pages/Login/reducer';
import addBook from './pages/AddBook/reducer';
import discovery from './pages/Discovery/reducer';

export default combineReducers({
    router: routerStateReducer,
    main,
    register,
    login,
    addBook,
    container,
    discovery
});
