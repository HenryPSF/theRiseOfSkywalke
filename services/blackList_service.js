exports.isInBlackList = function(phone) {
    const getPhonesFromDataBase = ['123456789','98765432'];
    return getPhonesFromDataBase.includes(phone);
}