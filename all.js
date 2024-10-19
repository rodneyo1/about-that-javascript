async function all(objectOfPromises) {
  if (!objectOfPromises) return {};

  let result = {};
  let error;

  for (const [key, value] of Object.entries(objectOfPromises)) {
    // If value is not an object or not a Promise, treat it as a synchronous value
    if (typeof value !== "object" || typeof value.then !== "function") {
      result[key] = value;
      continue;
    }

    // Await the promise and assign it to result, or capture the error
    await value.then(resolvedValue => {
      result[key] = resolvedValue;
    }).catch(err => {
      error = err;
    });
  }

  // If there was an error in any promise, throw the error
  if (error) throw error;

  return result;
}

const promises = {
  a: 1,                    // Synchronous value
  b: Promise.resolve(42),   // Resolved promise
  c: true,                  // Another synchronous value
  d: Promise.reject("Error") // A rejected promise (throws error)
};

all(promises).then(result => console.log(result))
  .catch(error => console.error("Caught error:", error));

// Output before error:
// Caught error: Error
