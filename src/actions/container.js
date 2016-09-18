import { replace } from 'redux-router';
import actionType from '../constant/actionType';

export function changeBottomNav(payload) {
    return dispatch => {
        dispatch(replace(payload));
        dispatch({ type: actionType.CHANGE_BOTTOM_NAV, payload });
    }
}
