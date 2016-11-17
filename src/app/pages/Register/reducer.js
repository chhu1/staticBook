import actionType from '../../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    email: '',
    password: '',
    repeatPassword: '',
    apiLoading: false,
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.REGISTER_EMAIL_CHANGE:
            return state.set('email', action.payload);
        case actionType.REGISTER_PASSWORD_CHANGE:
            return state.set('password', action.payload);
        case actionType.REGISTER_REPEAT_PASSWORD_CHANGE:
            return state.set('repeatPassword', action.payload);
        case actionType.REGISTER_API_LOADING:
            return state.set('apiLoading', action.payload);
        default:
            return state;
    }
}
