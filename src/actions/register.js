import { CALL_API } from '../middleware/apis';
import actionType from '../constant/actionType';
import { push } from 'redux-router';
import { simpleApiFailToast } from './utils';
import Apis from '../apis/apis';

export function registerUser(params) {
    return {
        [CALL_API]: Apis['userRegister']({
            types: [
                (dispatch, getState) => {
                    dispatch({ type: actionType.REGISTER_API_LOADING, payload: true });
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.REGISTER_API_LOADING, payload: false });
                    dispatch(push('/login'))
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.REGISTER_API_LOADING, payload: false });
                    simpleApiFailToast(dispatch, response);
                }
            ],
            params
        })
    }
}

export function registerEmailChange(payload) {
    return { type: actionType.REGISTER_EMAIL_CHANGE, payload };
}

export function registerPasswordChange(payload) {
    return { type: actionType.REGISTER_PASSWORD_CHANGE, payload };
}

export function registerRepeatPasswordChange(payload) {
    return { type: actionType.REGISTER_REPEAT_PASSWORD_CHANGE, payload };
}
