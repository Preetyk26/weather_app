<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/yashk9293/weather_webApp)
  ![GitHub stars](https://img.shields.io/github/stars/yashk9293/weather_webApp)
  ![GitHub forks](https://img.shields.io/github/forks/yashk9293/weather_webApp?style=social)

</div>

# "Simple Weather Application using HTML, CSS &amp; JavaScript"
In this weather app, you can get the weather details of a particular city by entering the city name. Details like temperature in celsius, humidity, windspeed, current time, day and date of the city is provided. Weather emoji icon depending upon the weather condition is shown for better visualization effect.

Live Demo : https://preetyk26.github.io/weather_app

## Show some :heart: and :star: the repo if you like the design.
![WeatherApp](https://github.com/Preetyk26/weather_app/blob/master/images/demo_interface.png)

## Author

👤 **Preety**

- Github: [@githubhandle](https://github.com/Preetyk26)


### Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

### Run Locally

To run **weather application** locally, run this command on your git bash:

Linux and macOS:

```bash
sudo git clone https://github.com/Preetyk26/weather_app.git
```

Windows:

```bash
git clone https://github.com/Preetyk26/weather_app.git
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
