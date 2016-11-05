import assign from 'object-assign';
import callApi from '../apis/callApi';

export const CALL_API = 'SymbolCallAPI';

export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { url } = callAPI;
    const { types, params, fetchType } = callAPI;
    if (typeof url === 'function') {
        url = url(store.getState());
    }
    if (typeof url !== 'string') {
        throw new Error('Specify a string URL.');
    }
    if (typeof fetchType !== 'string') {
        throw new Error('Specify a string fetchType.');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(nextAction => typeof nextAction === 'string' || typeof nextAction === 'function')) {
        throw new Error('Expected action to be string or function.');
    }

    function actionWith(data) {
        const finalAction = assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    function createActions(nextAction, response) {
        typeof nextAction === 'function' ? (response ? nextAction(store.dispatch, store.getState, response) : nextAction(store.dispatch, store.getState)) : (response ? next(actionWith({ type: nextAction, payload: response })) : next(actionWith({ type: nextAction })))
    }

    const [apiStart, apiSuccess, apiFailure] = types;
    createActions(apiStart);
    return callApi[fetchType](url, params).then(
        response => createActions(apiSuccess, response),
        error => createActions(apiFailure, {
            status: 0,
            errorMsg: error.errorMsg || '加载失败',
            errorCode: error.errorCode || 100
        })
    )
}
