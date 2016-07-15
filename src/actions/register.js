import { CALL_API } from '../middleware/apis';
import actionType from '../constant/actionType';
import { push } from 'redux-router';
import { showSimpleToast, changePath } from './main';
import Apis from '../apis/apis';

export function registerUser(params) {
    return {
        [CALL_API]: Apis('userRegister')({
            types: [
                (dispatch, getState) => {
                    let payload = true;
                    dispatch({ type: actionType.REGISTER_API_LOADING, payload });
                },
                (dispatch, getState, response) => {
                    let payload = false;
                    dispatch({ type: actionType.REGISTER_API_LOADING, payload });
                    dispatch(push('/login'))
                },
                (dispatch, getState, response) => {
                    let payload = false;
                    dispatch({ type: actionType.REGISTER_API_LOADING, payload });
                    let content = response && response.errorMsg ? response.errorMsg : '';
                    content && dispatch(showSimpleToast({ content }));
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