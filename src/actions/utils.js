import { setCookie } from '../utils/cookie';
import { showSimpleToast } from './main';

export function simpleApiFailToast(dispatch, response) {
    let content = response && response.errorMsg ? response.errorMsg : '';
    content && dispatch(showSimpleToast({ content }));
}

export function setUserInfomation(dispatch, response) {
    if (response && response.data) {
        let { userId, token } = response.data;
        if (userId && token) {
            setCookie('userId', userId);
            setCookie('token', token);
            return true;
        }
        dispatch(showSimpleToast({ content: '暂时无法设置用户信息' }));
    }
}
