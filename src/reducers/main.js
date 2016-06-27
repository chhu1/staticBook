import { Map } from 'immutable';

const initialState = Map({ page: '' });

export default function(state = initialState, action) {
    switch (action.type) {
        case 'changePage':
            state.set('page', action.page.page);
        default:
            return state;
    }
}
