import { Map } from 'immutable';

const initialState = Map({
    isShow: false,
    content: '',
    toastTimer: null
});

export default function(state = initialState, action) {
    switch (action.type) {
        case 'showToast':
            if (state.get('toastTimer')) {
                clearTimeout(state.get('toastTimer'));
            }
            let { timer, content } = action.params;
            return state.set('isShow', true).set('content', content).set('toastTimer', timer);
        case 'hideToast':
            return initialState;
        default:
            return state;
    }
}
