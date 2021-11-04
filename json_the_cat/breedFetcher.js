const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      //console.log("body:", body);
      if (error) {
        callback(error, []);
      } else {
        const data = JSON.parse(body);
        // console.log(data);
        if (data[0]) {
          callback(false, data[0].description);
        } else {
          callback("breed not found", []);
          //  console.log("breed not found");
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
