import callApi from '../apis/callApi';

export const CALL_API_LIST = 'SymbolCallAPIList';

export default store => next => action => {
    const APILists = action[CALL_API_LIST];
    if (typeof APILists === 'undefined') {
        return next(action);
    }

    const { apiList, types } = APILists;
    if (!Array.isArray(apiList) || !apiList.length) {
        throw new Error('Expected an array of apiList.');
    }
    if (!apiList.every(obj => typeof obj === 'object')) {
        throw new Error('Expected api config to be a object.');
    }
    if (!Array.isArray(types) || types.length !== 2) {
        throw new Error('Expected an array of two action types.');
    }
    if (!types.every(nextAction => typeof nextAction === 'function')) {
        throw new Error('Expected action to be string or function.');
    }

    let responseAll = {};

    function createActions(nextAction, response) {
        response ? nextAction(store.dispatch, store.getState, response) : nextAction(store.dispatch, store.getState);
    }

    const [apiStart, apiFinish] = types;
    createActions(apiStart);
    apiList.forEach(function(item) {
        let { key, fetchType, url, params } = item;
        callApi[fetchType](url, params).then(response => { responseAll[key] = response },
            error => {
                responseAll[key] = {
                    status: 0,
                    errorMsg: error.errorMsg || '加载失败',
                    errorCode: error.errorCode || 100
                }
            }).then(() => {
                apiList.length === Object.keys(responseAll).length && createActions(apiFinish, responseAll);
            })
    })
}
