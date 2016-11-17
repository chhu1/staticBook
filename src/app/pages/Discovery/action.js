import { CALL_API } from '../../../middleware/apis';

import Apis from '../../../apis/apis';
import actionType from '../../constant/actionType';
import { simpleApiFailToast } from '../../utils/actions';

export function getBookList() {
    return {
        [CALL_API]: Apis['getBookList']({
            types: [
                (dispatch, getState) => {
                    dispatch({ type: actionType.DISCOVER_BOOK_LIST_API_LOADING, payload: true });
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.DISCOVER_BOOK_LIST_API_LOADING, payload: false });
                    dispatch({ type: actionType.SET_BOOK_LIST_STATE, payload: response });
                },
                (dispatch, getState, response) => {
                    dispatch({ type: actionType.DISCOVER_BOOK_LIST_API_LOADING, payload: false });
                    simpleApiFailToast(dispatch, response);
                }
            ]
        })
    }
}
