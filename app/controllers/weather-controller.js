import WeatherService from "../services/weather-service.js";
import store from "../store.js";
import weatherService from "../services/weather-service.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let Weather = store.State.weather
  document.querySelector("#weather").innerHTML = Weather.weatherTemplate
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeatherAsync();
  }

  async getWeatherAsync() {
    try {
      await WeatherService.getWeatherAsync()
    } catch (error) {
      console.error(error)
    }
  }
}
