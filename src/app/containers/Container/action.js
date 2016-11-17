import { replace } from 'redux-router';
import actionType from '../../constant/actionType';

export function changeBottomNav(payload) {
    return dispatch => {
        dispatch(replace(payload));
        dispatch({ type: actionType.CHANGE_BOTTOM_NAV, payload });
    }
}

export function setBottomNavActive(payload) {
    return { type: actionType.SET_BOTTOM_NAV_ACTIVE, payload };
}
