const should = require('chai').should();
const sinon = require('sinon');

const phoneService = require('../../services/phone_service');
const eventService = require('../../services/events_service');

const emitter = eventService.emitter;

describe('Phone service module',function(){

    beforeEach( function() {
        this.emitSpy = sinon.spy(emitter, 'emit');
    });

    afterEach( function() {;
        this.emitSpy.restore();
    });

    it('valid phones should not emit an error', function() {
        phoneService.setPhone('123456789');
        this.emitSpy.called.should.be.false;
    });

    it('invalid phones should emit an error', function() {
        phoneService.setPhone('a123456789');
        this.emitSpy.calledWith('invalidPhone', 'a123456789').should.be.true;
    });

});