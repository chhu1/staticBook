import actionType from '../constant/actionType';
import { Map, fromJS } from 'immutable';

const initialState = Map({
    bookListApiLoading: false,
    bookList: Map()
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.DISCOVER_BOOK_LIST_API_LOADING:
            return state.set('bookListApiLoading', action.payload);
        case actionType.SET_BOOK_LIST_STATE:
            return state.set('bookList', fromJS(action.payload));
        default:
            return state;
    }
}
