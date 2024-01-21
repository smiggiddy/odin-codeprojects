import WeatherComponent from './weather';

class MainWebsite {
    constructor(apikey) {
        this.weatherComponent = new WeatherComponent(apikey);

        this.container = document.createElement('div');
        this.form = document.createElement('form');
    }

    websiteStructure() {
        this.container.classList.add('container');
        this.formStructure();
        this.weatherComponentStructure();

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Weather';

        // Add form to container
        this.container.append(title, this.weatherDiv);

        return this.container;
    }

    weatherComponentStructure() {
        // Main weather info component
        this.weatherDiv = document.createElement('div');
        this.weatherDiv.classList.add('weather-container');

        // Related to fetched weather report
        this.reportDiv = document.createElement('div');
        this.reportStructure();
        this.reportTempDetails.append(
            this.reportTempFeelsLike,
            this.reportMinTemp,
            this.reportMaxTemp,
        );
        this.reportDiv.append(
            this.reportCity,
            // this.reportConditions,
            this.reportConditionDescription,
            this.reportTemp,
            this.reportTime,
            this.reportTempDetails,
        );

        this.weatherDiv.append(this.form, this.reportDiv);
    }

    reportStructure() {
        this.reportDiv.classList.add('report-container');

        this.reportCity = document.createElement('h2');
        this.reportCity.classList.add('city');

        this.reportTemp = document.createElement('span');
        this.reportTemp.classList.add('temp');

        this.reportTime = document.createElement('span');
        this.reportTime.classList.add('time');

        this.reportTempDetails = document.createElement('div');
        this.reportTempDetails.classList.add('temp-details-container');

        this.reportTempFeelsLike = document.createElement('span');
        this.reportTempFeelsLike.classList.add('feels-like');

        this.reportMaxTemp = document.createElement('span');
        this.reportMaxTemp.classList.add('max');

        this.reportMinTemp = document.createElement('span');
        this.reportMinTemp.classList.add('min');

        // this.reportConditions = document.createElement('span');
        // this.reportConditions.classList.add('conditions');

        this.reportConditionDescription = document.createElement('span');
        this.reportConditionDescription.classList.add('conditions-desc');
    }

    updateReportComponents() {
        const items = [
            this.reportTime,
            this.reportCity,
            this.reportTemp,
            this.reportMaxTemp,
            this.reportMinTemp,
            this.reportConditionDescription,
            // this.reportConditions,
        ];

        function clearValues() {
            items.forEach((e) => {
                e.textContent = '';
            });
        }

        function updateReportTemperatureText(item, temp, range) {
            item.textContent = `${range}: ${temp}°`;
        }

        function updateReportText(item, text) {
            item.textContent = `${text}`;
        }

        return { clearValues, updateReportTemperatureText, updateReportText };
    }

    formStructure() {
        const div = document.createElement('div');
        div.classList.add('form-input');

        this.form.classList.add('form');
        this.form.method = 'post';
        this.form.action = '#';

        const input = document.createElement('input');
        input.id = 'zipcode';
        input.name = 'zipcode';
        input.type = 'text';
        input.placeholder = 'Zipcode';
        input.required = true;
        input.addEventListener('input', (input) =>
            this.formInputValidationChecker(input.target),
        );

        const span = document.createElement('span');
        span.classList.add('zipcode-span');

        this.button = document.createElement('button');
        this.button.type = 'submit';
        this.button.classList.add('btn');
        this.button.textContent = 'Submit';
        this.button.addEventListener('click', (e) => this.handleSubmit(e));

        div.append(input, span);
        this.form.append(div, this.button);
    }

    formInputValidationChecker(e) {
        this.ensureValidZipCode(e);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validZipcode) {
            const input = document.querySelector('#zipcode');
            // this.updateWeatherComponent({ temp: { current: 98 } });
            this.weatherComponent
                .getWeather(input.value)
                .then((report) => this.updateWeatherComponent(report));
            input.value = '';
        }
    }

    ensureValidZipCode(zipcode) {
        const validityMessage = 'Please enter a 5 digit zip code!';

        zipcode.minLength = 5;
        zipcode.maxLength = 5;
        zipcode.pattern = '\\d{5}';

        if (
            zipcode.validity.tooShort ||
            zipcode.validity.patternMismatch ||
            zipcode.validity.tooLong
        ) {
            zipcode.setCustomValidity(validityMessage);
            zipcode.nextSibling.textContent = validityMessage;
            this.validZipcode = false;
        } else {
            zipcode.setCustomValidity('');
            zipcode.nextSibling.textContent = '';
            this.validZipcode = true;
        }
    }

    updateWeatherComponent(weatherReportData) {
        // clear the values in the dom
        const reportUpdater = this.updateReportComponents();
        reportUpdater.clearValues();

        // convert the F and C temps
        weatherReportData.convertTemp('C');
        weatherReportData.convertTemp('F');
        console.table(weatherReportData);

        reportUpdater.updateReportText(this.reportCity, weatherReportData.city);
        reportUpdater.updateReportText(
            this.reportTemp,
            weatherReportData.F.current,
        );

        // reportUpdater.updateReportText(
        //     this.reportConditions,
        //     weatherReportData.weather.main,
        // );
        reportUpdater.updateReportText(
            this.reportConditionDescription,
            weatherReportData.weather.description,
        );

        reportUpdater.updateReportTemperatureText(
            this.reportTempFeelsLike,
            weatherReportData.F.feelsLike,
            'Feels like',
        );

        reportUpdater.updateReportTemperatureText(
            this.reportMaxTemp,
            weatherReportData.F.maxTemp,
            'max',
        );
        reportUpdater.updateReportTemperatureText(
            this.reportMinTemp,
            weatherReportData.F.minTemp,
            'min',
        );
    }
}

export { MainWebsite };
