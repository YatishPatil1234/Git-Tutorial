const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((message) => {
    console.log(message); // Outputs: Operation successful
  })
  .catch((message) => {
    console.log(message);
  });
