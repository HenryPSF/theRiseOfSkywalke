// This is just an async func that takes in a bool
// and calls a callback that returns a some message
// depending on the bool value
const someMadeUpAsyncFunc = (boolValue, cb) => {
    setTimeout(function() {
      cb(boolValue ? "You get a sweet :)" : "You get nothing!!");
    }, 0);
  }
  
  const promiseTest = (isAGoodDay) => new Promise((resolve) => {    
       setTimeout(function() {
            resolve(isAGoodDay ? 'Hello World!' : 'Bye!')
      }, 0);
    })

    module.exports = {
        someMadeUpAsyncFunc,
        promiseTest,
    };