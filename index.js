const apiKey = "2ec91bafe5b0934d316cead0c867e33f"; //"9bf03420bdd63f9fdd28137dddbb02a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";

    } catch (error) {
        alert("Location not found"); 
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


searchBtn.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkWeather(searchBox.value);
    }
  });
  
  searchBox.addEventListener("keyup", function (event) {
    // Check if the key pressed is the "Enter" key
    if (event.keyCode === 13) {
      // Call your function here
      checkWeather(searchBox.value);
    }
  });