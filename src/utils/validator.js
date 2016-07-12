export function isEmail(val) {
    return (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/.test(val));
}

export function passwordLength(val) {
    return val && val.length >= 6 && val.length <= 16;
}
