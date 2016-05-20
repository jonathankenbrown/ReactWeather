var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=cb17c89260251e9e9e935572758259ec';


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // to make sure characters are correct for URL like space = %20
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function (res) {    // Axios uses promises
    // this.setState({
    //   location: objData.location,
    //   temp: objData.temp
    // });
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
        // return {
        //   location: `${res.data.name},${res.data.sys.country}`,
        //   temp: res.data.main.temp
        // };
      }
    }, function (res){
      throw new Error(res.data.message);    //Error scenario
    });

  }
}
