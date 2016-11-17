import actionType from '../../constant/actionType';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    bookListApiLoading: false,
    bookList: List()
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.DISCOVER_BOOK_LIST_API_LOADING:
            return state.set('bookListApiLoading', action.payload);
        case actionType.SET_BOOK_LIST_STATE:
            return state.set('bookList', fromJS(action.payload.data.book));
        default:
            return state;
    }
}
