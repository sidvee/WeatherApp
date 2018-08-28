// Storage object initialization
const storage = new Storage();

// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Weather object initialization
const weather = new Weather(weatherLocation.city);

// UI object initialization
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change City Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change Location
    weather.changeLocation(city);

    // Set Location In Local Storage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close The Modal
    $('#locModal').modal('hide');
})

// Get Weather Information
function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err => console.log(err));
}