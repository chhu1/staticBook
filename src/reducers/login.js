import actionType from '../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    email: '',
    password: '',
    apiLoading: false,
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.LOGIN_EMAIL_CHANGE:
            return state.set('email', action.payload);
        case actionType.LOGIN_PASSWORD_CHANGE:
            return state.set('password', action.payload);
        case actionType.LOGIN_API_LOADING:
            return state.set('apiLoading', action.payload);
        default:
            return state;
    }
}