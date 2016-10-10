import { CALL_API } from '../middleware/apis';

import Apis from '../apis/apis';
import actionType from '../constant/actionType';
import { simpleApiFailToast } from './utils';

export function getBookList() {
    return {
        [CALL_API]: Apis['getBookList']({
            types: [
                (dispatch, getState) => {
                    let payload = true;
                    dispatch({ type: actionType.DISCOVER_BOOK_LIST_API_LOADING, payload });
                },
                (dispatch, getState, response) => {
                    let payload = false;
                    dispatch({ type: actionType.DISCOVER_BOOK_LIST_API_LOADING, payload });
                    dispatch({ type: actionType.SET_BOOK_LIST_STATE, payload: response });
                },
                (dispatch, getState, response) => {
                    let payload = false;
                    dispatch({ type: actionType.DISCOVER_BOOK_LIST_API_LOADING, payload });
                    simpleApiFailToast(dispatch, response);
                }
            ]
        })
    }
}
