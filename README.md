<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/yashk9293/weather_webApp)
  ![GitHub stars](https://img.shields.io/github/stars/yashk9293/weather_webApp)
  ![GitHub forks](https://img.shields.io/github/forks/yashk9293/weather_webApp?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/Yashk_9293?style=social)](https://twitter.com/intent/follow?screen_name=Yashk_9293)

</div>

# "Simple Weather Application using HTML, CSS &amp; JavaScript"
In this weather app, you can get the weather details of a particular city by entering the city name. Details like temperature in celsius, humidity, windspeed, current time, day and date of the city is provided. Weather emoji icon depending upon the weather condition is shown for better visualisation effect.

Live Demo : https://yashk9293.github.io/weather_webApp/

## Show some :heart: and :star: the repo if you like the design.
![WeatherApp](https://github.com/yashk9293/weather_webApp/blob/main/images/demo_interface.png)

## Author

👤 **Yash Kumar**

- Github: [@githubhandle](https://github.com/yashk9293)
- Twitter: [@twitterhandle](https://twitter.com/Yashk_9293)
- Linkedin: [linkedin](https://www.linkedin.com/in/yashk9293/)

### Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

### Run Locally

To run **weather application** locally, run this command on your git bash:

Linux and macOS:

```bash
sudo git clone https://github.com/yashk9293/weather_webApp.git
```

Windows:

```bash
git clone https://github.com/yashk9293/weather_webApp.git
```

<br>

This project is about building a web application to show a weather forecast using weather API, the api providers are
- https://openweathermap.org/
- https://www.weatherapi.com/

## Usage

Paste your API key to the appid and key parameter of the given URLs. These URLs are in line.no 10 & 8 of index.js and setdates.js respectively. You can get both API key from **above mentioned links** for free. Here 1st API is used for all the details of weather of city and 2nd API is used for the current time, day and date of the city.

```javascript
api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=<your_api_key>";
```
```javascript
api = "https://api.weatherapi.com/v1/current.json?q=${city}&key=<your_api_key>";
```

## LICENSE

[MIT License](LICENSE)
