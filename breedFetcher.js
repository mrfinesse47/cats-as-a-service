const request = require("request");
const breed = process.argv[2];
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //console.log("body:", body);
    if (error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      // console.log(data);
      if (data[0]) {
        console.log(data[0].description);
      } else {
        console.log("breed not found");
      }
    }
  }
);
