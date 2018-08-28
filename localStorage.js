class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Miami'; // Deadult city
    }

    // Get local storage data
    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        return {
            city: this.city
        }
    }

    // Set city to local storage
    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}