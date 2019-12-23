const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.on('invalidPhone', onInvalidPhone);

function onInvalidPhone(phone) {
    console.log('phone is invalid', phone);
}

exports.emitter = emitter;