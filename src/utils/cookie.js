export function getCookieValue(name) {
    let tmpName = encodeURI(name) + '=';
    const allcookies = document.cookie;
    const pos = allcookies.indexOf(tmpName);
    if (pos != -1) {
        const start = pos + tmpName.length;
        let end = allcookies.indexOf(';', start);
        if (end == -1) end = allcookies.length;
        const value = allcookies.substring(start, end);
        return decodeURI(value);
    }
    return '';
}
