import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
  changeTemp(){
    if(document.getElementById('temp').innerText == `${ProxyState.weather.far}`){
      document.getElementById('temp').innerText = `${ProxyState.weather.cel}`
      document.getElementById('temp-unit').innerText = 'C'
    } else {
      document.getElementById('temp').innerText = `${ProxyState.weather.far}`
      document.getElementById('temp-unit').innerText = 'F'
    }
  }
}
