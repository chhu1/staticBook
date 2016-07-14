import 'whatwg-fetch';
import assign from 'object-assign';
import { addRequestParams } from '../utils/common';

function createFetch() {
    function get(url, data) {
        let urlWithParams = addRequestParams(url, data);
        let request = new Request(urlWithParams, {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json'
            })
        });
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                if (json.status == 0) {
                    return Promise.reject(json);
                }
                return json;
            })
    }

    function post(url, data) {
        let body = addRequestParams('', data);
        let request = new Request(url, {
            method: 'POST',
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }),
            body
        });
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                if (json.status == 0) {
                    return Promise.reject(json);
                }
                return json;
            })
    }

    return {
        get,
        post
    };
}

const callApi = createFetch();

export const CALL_API = 'SymbolCallAPI';

export default store => next => action => {
    const callAPI = action[CALL_API]
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
            errorMsg: error.errorMsg || '网络错误',
            errorCode: error.errorCode || 100
        })
    )
}
