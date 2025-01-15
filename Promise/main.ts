function simplePromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      let success = true; // Change this to `false` to simulate an error
  
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Something went wrong.");
      }
    });
  }
  
  simplePromise()
    .then((message) => {
      console.log(message);  // If successful: "Operation was successful!"
    })
    .catch((error) => {
      console.error(error);  // If failed: "Something went wrong."
    });
  