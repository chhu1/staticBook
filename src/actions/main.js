import assign from 'object-assign';
import { CALL_API } from '../middleware/apis';

export function showToast(params) {
    return { type: 'showToast', params };
}

export function hideToast() {
    return { type: 'hideToast' };
}

export function showSimpleToast(params) {
    return dispatch => {
        let timer = setTimeout(() => {
            dispatch({ type: 'hideToast' });
        }, params.toastTime ? params.toastTime : 1500);
        let newParams = assign({}, params, { timer: timer });
        dispatch({ type: 'showToast', params: newParams });
    }
}

export function fetchInfo() {
    return {
        [CALL_API]: {
            types: ['USER_REQUEST', 'USER_SUCCESS', 'USER_FAILURE'],
            url: 'http://localhost:3000/user/register.do',
            fetchType: 'post',
            params: { email: '1411365142@qq.com', password: '123456' }
        }
    }
}
