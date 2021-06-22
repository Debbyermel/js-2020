// navigator.geolocation.getCurrentPosition(function(position) {
//   console.log(position);
// });
// console.log('done');

// Non-blocking events
// SetTimeout()
// AddEventListener()


// Callback -> Promises, deal to async code easier.

//States of a promise:
//Pending is the default state of a promise
//Fulfilled (successful)
//Rejected

//Constructor Promise function, create objects that can invoke two methods:
//Then()
//Catch()

// For each promise we only can have a then().catch() called once.


//Create the promise constructor passing a callback and two arguments (Resolve and reject)
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed')), 1000);
// });

// promise
// .then(value => console.log(value))
// .catch(error => console.error(error))
// .finally(() => console.log('done'));


const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(position => {
    resolve(position);
  }, error => {
    reject(error);
  });
});

promise
.then(position => console.log(position))
.catch( error => console.error(error))
.finally(() => console.log('Done'));

