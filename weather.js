// Real-time weather lookup on weather-updates.html via OpenWeatherMap

const apiKey = "1635890035cbba097fd5c26c8ea672a1";

function getWeather() {
    const city = document.getElementById('city-input').value;
    const errorMsg = document.getElementById('error-message');
    const display = document.getElementById('weather-display');

    if (city === "") {
        errorMsg.innerText = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                errorMsg.innerText = "City not found! Please check spelling.";
                display.style.display = "none";
            } else {
                errorMsg.innerText = "";
                display.style.display = "flex";

                document.getElementById('city-name').innerText = data.name + ", " + data.sys.country;
                document.getElementById('temp').innerText = Math.round(data.main.temp) + "°C";
                document.getElementById('condition').innerText = data.weather[0].main;
                document.getElementById('humidity').innerText = data.main.humidity + "%";
                document.getElementById('wind').innerText = data.wind.speed + " km/h";
            }
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            errorMsg.innerText = "Error connecting to weather service.";
        });
}

document.getElementById("city-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
});
