function fetchWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    fetch(`/api/weather?city=${city}`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error("Error fetching weather data:", error));
}

function displayWeather(data) {
    if (data.cod !== 200) {
        alert("City not found!");
        return;
    }

    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p><strong>${data.main.temp}°C</strong></p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherInfo.style.display = "block";
}
