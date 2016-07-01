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
        let newParams = Object.assign({}, params, { timer: timer });
        dispatch({ type: 'showToast', params: newParams });
    }
}
