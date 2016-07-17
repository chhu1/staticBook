import { showSimpleToast } from './main';

export function simpleApiFailToast(dispatch, response) {
    let content = response && response.errorMsg ? response.errorMsg : '';
    content && dispatch(showSimpleToast({ content }));
}
