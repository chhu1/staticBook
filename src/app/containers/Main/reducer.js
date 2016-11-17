import actionType from '../../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    toast: Map({
        content: '',
        toastTimer: null,
        isShowToast: false
    }),
    loading: Map({
        isShowLoading: false
    })
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.SHOW_TOAST:
            if (state.getIn(['toast', 'toastTimer'])) {
                clearTimeout(state.get('toastTimer'));
            }
            let { timer, content } = action.payload;
            return state.setIn(['toast', 'isShowToast'], true).setIn(['toast', 'content'], content).setIn(['toast', 'toastTimer'], timer);
        case actionType.HIDE_TOAST:
            return state.setIn(['toast', 'isShowToast'], false).setIn(['toast', 'content'], '').setIn(['toast', 'toastTimer'], null);
        case actionType.SHOW_LOADING:
            return state.setIn(['loading', 'isShowLoading'], true);
        case actionType.HIDE_LOADING:
            return state.setIn(['loading', 'isShowLoading'], false);
        default:
            return state;
    }
}
