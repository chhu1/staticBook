import { push } from 'redux-router';
import { CALL_API } from '../../../middleware/apis';

import Apis from '../../../apis/apis';
import actionType from '../../constant/actionType';
import { simpleApiFailToast } from '../../utils/actions';

export function addBook(params) {
    return {
        [CALL_API]: Apis['addBook']({
            types: [
                (dispatch, getState) => {
                    dispatch({ type: actionType.ADD_BOOK_API_LOADING, payload: true });
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.ADD_BOOK_API_LOADING, payload: false });
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.ADD_BOOK_API_LOADING, payload: false });
                    simpleApiFailToast(dispatch, response);
                }
            ],
            params
        })
    }
}

export function addBookNameChange(payload) {
    return { type: actionType.ADD_BOOK_NAME_CHANGE, payload };
}

export function addBookDescChange(payload) {
    return { type: actionType.ADD_BOOK_DESC_CHANGE, payload };
}

export function addBookAuthorChange(payload) {
    return { type: actionType.ADD_BOOK_AUTHOR_CHANGE, payload };
}

export function addBookCompanyChange(payload) {
    return { type: actionType.ADD_BOOK_COMPANY_CHANGE, payload };
}

export function addBookCategoryChange(payload) {
    return { type: actionType.ADD_BOOK_CATEGORY_CHANGE, payload };
}
