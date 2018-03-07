const request = require('request');

var getWeather = (latitude,longitude,callback) => {

  request({
    url:`https://api.darksky.net/forecast/5a0141e31cb8b6008cf836cf1059fc89/${latitude},${longitude}`,
    json:true
  },(error,response,body)=>{
    if(!error && response.statusCode === 200){
      callback(undefined,
        {
        temperature:body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('unable to fetch weather data');
    }
  });

};

module.exports.getWeather = getWeather ;
