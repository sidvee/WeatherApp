class Weather {
    constructor(city) {
        this.apiKey = '6c5cc5b3219f726bf2d8dd1c1a088e34';
        this.city = city;
    }

    // Fetch Weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        console.log(responseData)
        return responseData
    }

    // change Weather Location
    changeLocation(city) {
        this.city = city;
    }

}