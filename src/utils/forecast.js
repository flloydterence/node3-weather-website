const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8db5d1f475e206806dcf687a3b153520&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}°C out. It feels like ${body.current.feelslike}°C out. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
