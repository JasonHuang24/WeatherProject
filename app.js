const express = require("express");
const app = express();
const https = require("https");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=0791b94be0a94ab76fcd8a93830a7a9b";
https.get(url, function (response) {
  console.log(response.statusCode);

  response.on("data", function (data) {
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    console.log(temp);
  });
});
app.get("/", function (req, res) {
  res.send("Server is up and running.");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
