import assign from 'object-assign';
import actionType from '../constant/actionType';

export function showToast(payload) {
    return { type: actionType.SHOW_TOAST, payload };
}

export function hideToast() {
    return { type: actionType.HIDE_TOAST };
}

export function showSimpleToast(payload) {
    return dispatch => {
        let timer = setTimeout(() => {
            dispatch({ type: actionType.HIDE_TOAST });
        }, payload.toastTime ? payload.toastTime : 1500);
        let newPayload = assign({}, payload, { timer });
        dispatch({ type: actionType.SHOW_TOAST, payload: newPayload });
    }
}
