export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.fahrenheit = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32) + " f"
    // (degreesK − 273.15) × 9/5 + 32
  }

  get weatherTemplate() {
    return `
      <p>${this.city}<p/>
      <p>${this.fahrenheit}<p/>
      `
  }
}