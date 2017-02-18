import actionType from '../../constant/actionType';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    pageSize: 5,
    pageNumber: 1,
    isFirst: true,
    noMoreData: false,
    apiLoading: false,
    bookList: List()
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.DISCOVER_BOOK_LIST_API_LOADING:
            return state.set('apiLoading', action.payload);
        case actionType.SET_BOOK_LIST_STATE:
            let middleState,
                bookList = action.payload.data.book;
            if (bookList.length == state.get('pageSize')) {
                middleState = state.set('pageNumber', state.get('pageNumber') + 1);
            } else {
                middleState = state.set('noMoreData', true);
            }
            return middleState.set('bookList', middleState.get('bookList').concat(fromJS(action.payload.data.book))).set('isFirst', false);
        default:
            return state;
    }
}
