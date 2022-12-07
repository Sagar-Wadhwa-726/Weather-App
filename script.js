const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d5cf8348fmshe3fc84b9961e0ecp166a8ajsn3c1bdb4383bd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

//function to return all the details of weather
const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json()) //parsing into json
        .then(response => {

            if (response.error) {
                document.getElementById("helper_text").style.display = "none"
                document.getElementById("weather_header").style.display = "none"
                document.getElementById("show_if_found_data").style.display = "none"
                document.getElementById("hidden_until_undefined").style.display = "block"
            }

            else {
                cloud_pct.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind_speed2.innerHTML = response.wind_speed
                wind_degrees.innerHTML = response.wind_degrees
                weather_city_header.innerHTML = city

                // Converstion of TIMESTAMP ==> ACTUAL TIME
                let sunrise_variable = response.sunrise
                sunrise_variable = new Date(sunrise_variable * 1000)
                sunrise_variable = sunrise_variable.toLocaleTimeString("en-US")
                sunrise.innerHTML = sunrise_variable

                // Converstion of TIMESTAMP ==> ACTUAL TIME
                let sunset_variable = response.sunset
                sunset_variable = new Date(sunset_variable * 1000)
                sunset_variable = sunset_variable.toLocaleTimeString("en-US")
                sunset.innerHTML = sunset_variable

                document.getElementById("helper_text").style.display = "none"
                document.getElementById("weather_header").style.display = "block"
                document.getElementById("show_if_found_data").style.display = "block"
                document.getElementById("hidden_until_undefined").style.display = "none"
            }

        }
        )
        .catch(err => console.error(err)); //like the try catch block if any error occurs
}

//Added an event listener to the element with the id of submit. Whenever someone clicks 
// on the element with the id of submit, a function will be executed.
submit.addEventListener("click", () => {
    event.preventDefault()
    getWeather(city.value)
})

