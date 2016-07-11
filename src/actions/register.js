import { CALL_API } from '../middleware/apis';
import Apis from '../apis/apis';

export function registerUser() {
    return {
        [CALL_API]: Apis('userRegister')({
            types: ['USER_REQUEST', 'USER_SUCCESS', 'USER_FAILURE'],
            params: { email: '1411365142@qq.com', password: '123456' }
        })
    }
}
