import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {

  async getWeather() {
    let res = await api.get('api/weather')
    console.log(res.data)
    AppState.weather = new Weather(res.data)
    console.log(AppState.weather)
  }

}

export const weatherService = new WeatherService