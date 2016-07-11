import assign from 'object-assign';
import actionType from '../constant/actionType';

export function showToast(params) {
    return { type: actionType.SHOW_TOAST, params };
}

export function hideToast() {
    return { type: actionType.HIDE_TOAST };
}

export function showSimpleToast(params) {
    return dispatch => {
        let timer = setTimeout(() => {
            dispatch({ type: actionType.HIDE_TOAST });
        }, params.toastTime ? params.toastTime : 1500);
        let newParams = assign({}, params, { timer: timer });
        dispatch({ type: actionType.SHOW_TOAST, params: newParams });
    }
}
