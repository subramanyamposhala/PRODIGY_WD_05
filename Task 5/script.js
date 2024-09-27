document.getElementById('getWeather').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function fetchWeather(location) {
    const apiKey = 'a3335850e89d5c998cfa07e034a120f2'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod === 200) {
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p> <!-- Displaying Temperature -->
            <p>Weather: ${data.weather[0].description}</p> <!-- Displaying Weather Condition -->
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } else {
        document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
    }
}


