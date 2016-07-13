import { CALL_API } from '../middleware/apis';
import actionType from '../constant/actionType';
import { showSimpleToast, changePath } from './main';
import Apis from '../apis/apis';

export function registerUser(params) {
    return {
        [CALL_API]: Apis('userRegister')({
            types: [
                'userRegisterApiStart',
                (dispatch, getState, response) => {
                    changePath('/login');
                },
                (dispatch, getState, response) => {
                    let content = response && response.errorMsg ? response.errorMsg : '';
                    content && showSimpleToast({ content })(dispatch);
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
