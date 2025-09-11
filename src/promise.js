const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("A");
    resolve();
  }, 10000);
});
promiseOne.then(function () {
  console.log("B");
});
console.log("C");
