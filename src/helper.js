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

exports.isOnlyLetters = (str) => {
    return /^[A-Za-z\s]+$/.test(str)
}

exports.getUniqueCode = function (){
    return Math.floor(1000 + Math.random() * 9000)
}