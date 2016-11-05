import assign from 'object-assign';
import { getCookieValue } from '../utils/cookie';

const API_DOMAIN = 'http://192.168.0.106:3000';
const API_SOURCE = {
    userRegister: { url: '/user/register.do', fetchType: 'post', noToken: true },
    userLogin: { url: '/user/login.do', fetchType: 'post', noToken: true },
    getBookList: { url: '/book/list.do', fetchType: 'get' }
}

function createApis() {
    let Apis = new Object();
    for (let key in API_SOURCE) {
        let value = API_SOURCE[key];
        Apis[key] = opts => {
            if (!opts) throw new Error('Specify a object opts.');
            let { url, fetchType, noToken } = value;
            if (noToken) return assign({}, { fetchType, url: `${API_DOMAIN}${url}` }, opts);
            let token = getCookieValue('token');
            let userId = getCookieValue('userId');
            return assign({}, { fetchType, url: `${API_DOMAIN}${url}` }, opts, { params: { token, userId, ...opts.params } });
        }
    }
    return Apis;
}

const Apis = createApis();
export default Apis;
