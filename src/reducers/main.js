import actionType from '../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    toast: Map({
        isShow: false,
        content: '',
        toastTimer: null
    }),
    urlAbout: Map({
        apiCurrentPath: ''
    })
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.SHOW_TOAST:
            if (state.getIn(['toast', 'toastTimer'])) {
                clearTimeout(state.get('toastTimer'));
            }
            let { timer, content } = action.payload;
            return state.setIn(['toast', 'isShow'], true).setIn(['toast', 'content'], content).setIn(['toast', 'toastTimer'], timer);
        case actionType.HIDE_TOAST:
            return state.setIn(['toast', 'isShow'], false).setIn(['toast', 'content'], '').setIn(['toast', 'toastTimer'], null);
        case actionType.CHANGE_PATH:
            return state.setIn(['urlAbout', 'apiCurrentPath'], action.payload)
        default:
            return state;
    }
}
