export default class WeatherComponent {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    currentWeatherData = undefined;

    async getWeatherReport(zipcode) {
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${this.apiKey}`;
        let response = await fetch(url);

        if (response.status !== 200) {
            return;
        }
        let data = await response.json();

        // Set current weather data
        if (data) {
            this.setCurrentWeather(data);
            this.parseWeatherData();
        }
    }

    parseWeatherData() {
        const self = this;
        let data = {
            time: this.currentWeatherData.dt,
            weather: {
                main: this.currentWeatherData.weather[0].main,
                description: this.currentWeatherData.weather[0].description,
            },
            temp: {
                current: this.currentWeatherData.main.temp,
                feelsLike: this.currentWeatherData.main.feels_like,
                minTemp: this.currentWeatherData.main.temp_min,
                maxTemp: this.currentWeatherData.main.temp_max,
            },
            wind: this.currentWeatherData.wind,
            sunrise: this.currentWeatherData.sys.sunrise,
            sunset: this.currentWeatherData.sys.sunset,
            city: this.currentWeatherData.name,

            convertTemp(conversionType) {
                this[conversionType] = {};
                const method =
                    conversionType === 'F'
                        ? self.convertToFarenheit
                        : self.convertToCelsius;
                const tempKeys = Object.keys(this.temp);
                tempKeys.forEach((element) => {
                    this[conversionType][element] = method(this.temp[element]);
                });
            },
        };

        if (data) this.parsedWeatherData = data;
    }

    async getWeather(zip) {
        try {
            await this.getWeatherReport(zip);

            return (
                this.parsedWeatherData || {
                    error: 'Sorry, unable to fetch current weather at this time. :(',
                }
            );
        } catch (error) {
            console.log(error.message);
            return { error: 'issue occured while fetching weather data!' };
        }
    }

    convertToCelsius(temp) {
        return Math.round(temp - 273.15);
    }

    convertToFarenheit(temp) {
        return Math.round((temp - 273.15) * 1.8 + 32);
    }

    setCurrentWeather(data) {
        this.currentWeatherData = data;
    }
}

// const api = 'bd5d23eea5751c12b0ef75344e3df932';
//
// const weather = new WeatherComponent(api);
// weather.getWeather(20716).then((data) => console.log(data));
// weather.getWeather(22030).then((data) => {
//     data.convertTemp('C');
//     console.log(data);
//     data.convertTemp('F');
//     console.log(data);
// });
