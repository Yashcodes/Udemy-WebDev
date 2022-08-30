const express = require("express");
const https = require("https");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "73b918497386660154b70e63e578ceae";
  const units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`;
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

      //    res.send(`<h1>The current temperature in London is ${temp} and the weather is ${desc}</h1>`);    // ! Here we have send the temperature and the weather description in one send function simultaneously. If we want to send them separately, we can use res.write as many we want to send and the use the function res.send to send the data. The syntax is res.write(data).send(data).
      res.write(`<h1>The current temperature in ${query} is ${temp}</h1>`);
      res.write(`<p>The weather is currently ${desc}</p>`);
      res.write(`<img src="${icon}">`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
