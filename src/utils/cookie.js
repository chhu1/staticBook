export function getCookieValue(name) {
    let value = `; ${document.cookie}`;
    var parts = value.split(`; ${name}=`);
    return parts.length != 2 ? null : parts.pop().split(";").shift();
}

export function setCookie(key, value, time) {
    let hours = time || 7 * 24;
    let expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + hours * 60 * 60 * 1000);
    document.cookie = `${key}=${value};path=/;expires=${expiresDate.toGMTString()}`;
}
