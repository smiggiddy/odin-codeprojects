class WeatherComponent {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getWeatherReport(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        console.log(
            this.convertToFarenheit(data.main.temp),
            this.convertToCelsius(data.main.temp),
        );
        this.setReport(data);
    }

    // async printWeather() {
    //     let self = this;
    //     let wait = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(this.getData);
    //         }, 5000);
    //     }).then(() => {
    //         console.log(self.getData());
    //     });
    // }
    //
    convertToCelsius(temp) {
        return temp - 273.15;
    }

    convertToFarenheit(temp) {
        return (temp - 273.15) * 1.8 + 32;
    }

    setReport(data) {
        this.data = data;
    }

    getReport() {
        return this.data;
    }
}

const api = 'bd5d23eea5751c12b0ef75344e3df932';

const weather = new WeatherComponent(api);
weather.getWeatherReport('Washington DC');
// weather.printWeather();
/*
{
  coord: { lon: -94.4335, lat: 33.4501 },
  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ],
  base: 'stations',
  main: {
    temp: 264.97,
    feels_like: 261.85,
    temp_min: 262.75,
    temp_max: 266.19,
    pressure: 1031,
    humidity: 60,
    sea_level: 1031,
    grnd_level: 1017
  },
  visibility: 10000,
  wind: { speed: 1.61, deg: 299, gust: 2.97 },
  clouds: { all: 0 },
  dt: 1705456294,
  sys: {
    type: 2,
    id: 2011572,
    country: 'US',
    sunrise: 1705411289,
    sunset: 1705447968
  },
  timezone: -21600,
  id: 4675805,
  name: 'Bowie',
  cod: 200
}
*/
