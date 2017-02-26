import actionType from '../../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    name: '',
    desc: '',
    author: '',
    company: '',
    categoryId: 1,
    apiLoading: false,
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.ADD_BOOK_NAME_CHANGE:
            return state.set('name', action.payload);
        case actionType.ADD_BOOK_DESC_CHANGE:
            return state.set('desc', action.payload);
        case actionType.ADD_BOOK_AUTHOR_CHANGE:
            return state.set('author', action.payload);
        case actionType.ADD_BOOK_COMPANY_CHANGE:
            return state.set('company', action.payload);
        case actionType.ADD_BOOK_CATEGORY_CHANGE:
            return state.set('categoryId', parseInt(action.payload));
        case actionType.ADD_BOOK_API_LOADING:
            return state.set('apiLoading', action.payload);
        default:
            return state;
    }
}
