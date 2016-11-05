import 'whatwg-fetch';
import { addRequestParams } from '../utils/common';

function createFetch() {
    function get(url, data) {
        let urlWithParams = addRequestParams(url, data);
        let request = new Request(urlWithParams, {
            method: 'GET',
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
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
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
export default callApi;
