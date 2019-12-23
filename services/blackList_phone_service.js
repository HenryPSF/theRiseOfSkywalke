const emitter = require('./events_service').emitter;
const blacklistService = require('./blackList_service');

exports.setPhone = function(phone) {
    if (!/^\d+$/.test(phone) ||
        blacklistService.isInBlackList(phone)) {
        emitter.emit('invalidPhone', phone);
    }
}