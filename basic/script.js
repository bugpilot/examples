// script.js
// ------------------------------
// This is an example of a script that will generate errors
// and warnings in the console. It will also throw an error
// and generate a promise rejection.

let counter = 60;

const generateErrors = () => {
  setInterval(() => {
    counter--;
    if (counter <= 0) {
      return;
    }

    const x = Math.floor(Math.random() * 10);

    switch (x) {
      case 0:
        console.log("Everything is OK");
        break;
      case 1:
        console.warn("This is a warning");
        break;
      case 2:
        console.error("This is an error");
        break;
      case 3:
        throw new Error("Throwing a new error");
      // break;
      case 4:
        (async () => {
          await Promise.reject("Promise rejection");
        })();
        break;
      case 5:
        fetch("https://reqres.in/api/users/2")
          .then((r) => r.json())
          .then((r) => console.debug("Network request:", r));
        break;
      case 6:
        fetch("https://paypal.com"); // should return cors error
        break;
      case 7:
        fetch("hxxxp://invalid.url");
        break;
      case 8:
        (() => {
          foobar();
        })();
        break;
      case 9:
        break;

      default:
        break;
    }
  }, 200);
};

setTimeout(generateErrors, 5000);
