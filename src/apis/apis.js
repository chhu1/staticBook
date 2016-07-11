import assign from 'object-assign';

export default function(key) {
    const API_DOMAIN = 'http://localhost:3000';
    const Apis = {
        userRegister: function(opts) {
            return assign({}, {
                url: API_DOMAIN + '/user/register.do',
                fetchType: 'post'
            }, opts)
        }
    }
    return Apis[key];
}
