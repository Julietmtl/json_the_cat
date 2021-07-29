const request = require('request');

const breed = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request((url + breed), (error, response, body) => {
  if (body === undefined) {
    return console.log("No webpage exists!"); // if there is an error, it will return nothing, because nothing is on the page.
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log("oh no!");
  }
  console.log(data);
});

