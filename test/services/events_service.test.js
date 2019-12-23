const eventService = require('../../services/events_service');
const sinon = require('sinon');
const emitter = eventService.emitter;
const {expect, should} = require('chai');

describe('Event service',function(){

    beforeEach( function() {
        this.consoleSpy = sinon.spy(console, 'log');
    });

    afterEach( function() {;
        this.consoleSpy.restore();
    });

    it('Emitted errors should be logged', function() {
        emitter.emit('invalidPhone', 'a123456789');
        this.consoleSpy.called.should.be.true;
        expect(this.consoleSpy.calledOnce).to.be.true;
    });

});


