const emitter = require('./events_service').emitter;

exports.setPhone = function(phone) {
    if (!/^\d+$/.test(phone)) {
        emitter.emit('invalidPhone', phone);
    }
}