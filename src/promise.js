// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("A");
//     resolve();
//   }, 10000);
// });
// promiseOne.then(function () {
//   console.log("B");
// });
// // console.log("C");

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 10000);
// });
// promiseOne.then(function () {
//   console.log("Promise consumed");
// });
// console.log("A");

//promise ek constructor function h
/////////////////////////////////////////////////////////////////

//Promise without variable

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("async task two");
//     resolve();
//   }, 5000);
// }).then(() => {
//   console.log("async task two resolved");
// });

///////////////////////////////////////////////////////////////////////

// ///// Promise with data

// const promiseWithData = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("async Promise with data");
//     resolve({ name: "Misbah", age: "40" });
//   }, 5000);
// });
// promiseWithData.then((user) => console.log(user));
// promiseWithData.then((data) => console.log(data));

// promiseWithData.then((user) => {
//   console.log(user);
// });

// promiseWithData.then(function (user) {
//   console.log(user);
// });
/////////////////////////////////////////////////////////////////

//Promise with error handling

// const promiseError = new Promise(function (resolve, reject) {
//   let success = true;
//   if (success) {
//     resolve("get data");
//   } else {
//     reject("somethng went wrong");
//   }
// });
// promiseError
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
///////////////////////////////////////////////////////////////

//async/await modern way
//ye 1 named fun h tbhi esy run krwaya
async function getData() {
  try {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("get data");
      }, 5000);
    });
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getData();
