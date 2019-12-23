const chai = require("chai");
const  expect = chai.expect;
chai.use(require("chai-as-promised"));
const {someMadeUpAsyncFunc, promiseTest} = require('../../services/asyncFunctions');

describe('AsyncTest', function(){
    
    // Added the `only` tag to have only this set of tests to run
    describe.only("AsyncTest whit callback", function()  {
        it("should return `You get a sweet :)` if `true` is passed in", function(done) {
            someMadeUpAsyncFunc(true, function(sweetCheck){
                expect(sweetCheck).to.equal("You get a sweet :)");
                done();
            });
        });
    
        it("should return `You get nothing!!` if `false` is passed in", function(done) {
            someMadeUpAsyncFunc(false, function(sweetCheck){
                // Let's fail it on purpose just to see what happens
                expect(sweetCheck).to.equal("You get nothing!!");
                done();
            });
        });
    });

    describe.only("AsyncTest whit promise", function()  {
        it("should return `Hello World!` if `true` is passed in", function() {

            promiseTest(true).then(function(data) {
                expect(data).to.equal('Hello World!');
              }).catch((error) => {
                expect(error).to.equal('Bye!'); //is passed with errors
              });
        });
    });

    // Added the `only` tag to have only this set of tests to run
    describe.only("AsyncTest with chai-as-promised", function()  {
        it("should return `You get a sweet :)` if `true` is passed in", function() {
        return expect(promiseTest(true)).to.eventually.equal("Hello World!");
        });
    
        it("should return `You get nothing!!` if `false` is passed in", function() {
        return expect(promiseTest(false)).to.eventually.equal('Bye!');
        });

        it('assertion success', async () => {
            const result = await promiseTest(false);
            expect(result).to.equal('Bye!'); 
          });
    });
});