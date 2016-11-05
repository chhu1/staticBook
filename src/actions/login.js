import { push } from 'redux-router';
import { CALL_API } from '../middleware/apis';

import Apis from '../apis/apis';
import actionType from '../constant/actionType';
import { simpleApiFailToast, setUserInfomation } from './utils';

export function loginUser(params) {
    return {
        [CALL_API]: Apis['userLogin']({
            types: [
                (dispatch, getState) => {
                    dispatch({ type: actionType.LOGIN_API_LOADING, payload: true });
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.LOGIN_API_LOADING, payload: false });
                    setUserInfomation(dispatch, response) && dispatch(push('/discovery'));
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.LOGIN_API_LOADING, payload: false });
                    simpleApiFailToast(dispatch, response);
                }
            ],
            params
        })
    }
}

export function loginEmailChange(payload) {
    return { type: actionType.LOGIN_EMAIL_CHANGE, payload };
}

export function loginPasswordChange(payload) {
    return { type: actionType.LOGIN_PASSWORD_CHANGE, payload };
}
