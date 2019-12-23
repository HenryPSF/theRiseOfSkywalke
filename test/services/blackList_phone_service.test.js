const {should} = require('chai');
const sinon = require('sinon');
const phoneService = require('../../services/blackList_phone_service');
const eventService = require('../../services/events_service');
const blacklistService = require('../../services/blackList_service');
const emitter = eventService.emitter;
describe('Phone service module test using Stub', function(){

    beforeEach( function() {
        this.emitSpy = sinon.spy(emitter, 'emit');
        this.isInBlackListStub = sinon.stub(blacklistService, 'isInBlackList');
    });
    afterEach( function() {;
        this.emitSpy.restore();
        this.isInBlackListStub.restore();
    });

    describe('Black List Phone service module',function(done){
        it('valid phones not in blacklist should not emit an error', function() {
            this.isInBlackListStub.returns(false);
            phoneService.setPhone('123456789');
            this.emitSpy.called.should.be.false;
        });
        it('valid phones in blacklist should emit an error', function() {
            this.isInBlackListStub.returns(true);
            phoneService.setPhone('123456789');
            this.emitSpy.calledWith('invalidPhone', '123456789').should.be.true;
        });
        it('invalid phones should emit an error', function() {
            phoneService.setPhone('a123456789');
            this.emitSpy.calledWith('invalidPhone', 'a123456789').should.be.true;
        });
    });
});

describe('Phone service module test using Mock', function(){
    beforeEach( function() {
        this.emitSpy = sinon.spy(emitter, 'emit');
        this.blacklistServiceMock = sinon.mock(blacklistService);
    });

    afterEach( function() {;
        this.emitSpy.restore();
        this.blacklistServiceMock.restore();
    });
    describe('Black List Phone service module',function(){

        it('valid phones not in blacklist should not emit an error', function() {
            this.blacklistServiceMock.expects('isInBlackList').withExactArgs('123456789').returns(false);
            phoneService.setPhone('123456789');
            this.blacklistServiceMock.verify();
            this.emitSpy.called.should.be.false;
        });

        it('valid phones in blacklist should emit an error', function() {
            this.blacklistServiceMock.expects('isInBlackList').withExactArgs('123456789').returns(true);
            phoneService.setPhone('123456789');
            this.blacklistServiceMock.verify();
            this.emitSpy.calledWith('invalidPhone', '123456789').should.be.true;
        });

        it('invalid phones should emit an error', function() {
            phoneService.setPhone('a123456789');
            this.emitSpy.calledWith('invalidPhone', 'a123456789').should.be.true;
        });

    });
});
