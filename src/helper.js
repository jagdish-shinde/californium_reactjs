exports.isValidString = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
exports.isValidMobile = function (value) {
    return /^[6-9]\d{9}$/.test(value)
}

exports.isValidEmailSyntax = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
