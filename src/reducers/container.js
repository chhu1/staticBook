import actionType from '../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    activeBottomNav: '',
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.CHANGE_BOTTOM_NAV:
        case actionType.SET_BOTTOM_NAV_ACTIVE:
            return state.set('activeBottomNav', action.payload);
        default:
            return state;
    }
}
