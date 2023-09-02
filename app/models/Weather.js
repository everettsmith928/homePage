export class Weather {
  constructor(data) {
    this.temp = Math.floor(1.8 * (data.main.temp - 273.15) + 32)
    this.cTemp = Math.floor(data.main.temp - 273.15)
    this.fahrenheit = true
    this.description = data.weather[0].description
    this.city = data.name
  }

  get weatherTemplate() {
    return `<h3 class="text-center text-light">${this.city}</h3>
    <p class="text-center text-light">${this.description}</p>
    <h4 class="text-center text-light temperature">Fahrenheit: ${this.temp}°</h4>`
  }

  get CelciusTemplate() {
    return `<h3 class="text-center text-light">${this.city}</h3>
    <p class="text-center text-light">${this.description}</p>
    <h4 class="text-center text-light temperature">Celsius: ${this.cTemp}°</h4>`
  }


}