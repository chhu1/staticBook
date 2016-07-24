import assign from 'object-assign';

export default function(key) {
    const API_DOMAIN = 'http://192.168.0.109:3000';
    const Apis = {
        userRegister: function(opts) {
            return assign({}, {
                url: API_DOMAIN + '/user/register.do',
                fetchType: 'post'
            }, opts)
        },
        userLogin: function(opts) {
            return assign({}, {
                url: API_DOMAIN + '/user/login.do',
                fetchType: 'post'
            }, opts)
        }
    }
    return Apis[key];
}
