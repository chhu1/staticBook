export function dateFormat(date, fmt) {
    date = date || new Date;
    fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
    var _date = new Date(date);
    var o = {
        'M+': _date.getMonth() + 1,
        'd+': _date.getDate(),
        'h+': _date.getHours(),
        'm+': _date.getMinutes(),
        's+': _date.getSeconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
}

export function addRequestParams(url, params) {
    if (!params) {
        return url;
    }
    let items = [];
    for (let key in params) {
        items.push(`${key}=${params[key]}`);
    }
    if (!url) {
        return `${items.join('&')}`
    }
    return items.length ? `${url}?${items.join('&')}` : url
}
