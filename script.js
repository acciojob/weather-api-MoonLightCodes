//your JS code here. If required.
document.getElementById("getWeather").addEventListener("click", async () => {
            const apiKey = "7c4ea1c08498a29c1ceb93122a5c4234"; // Replace with your OpenWeather API key
            const city = "London";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch weather data");
                
                const data = await response.json();
                const weatherCondition = data.weather[0].description;
                
                document.getElementById("weatherData").innerText = `Current weather in ${city}: ${weatherCondition}`;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        });