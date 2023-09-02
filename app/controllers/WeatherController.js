import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { weatherService } from "../services/WeatherService.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
  let content = AppState.weather.weatherTemplate
  setHTML('weather', content)
}
export class WeatherController {
  constructor() {
    console.log('constructor for Weather')
    AppState.on('weather', _drawWeather)
    this.getWeather()
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }

  toggleTemperature() {
    let weather = AppState.weather
    if (weather.fahrenheit == true) {
      weather.fahrenheit = false
      setHTML('weather', weather.CelciusTemplate)
    } else {
      setHTML('weather', weather.weatherTemplate)
      weather.fahrenheit = true
    }
  }
}