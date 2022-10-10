const boredApp = {};
//url endpoint for random and start point for search params
boredApp.url = "http://www.boredapi.com/api/activity";

boredApp.generateButton = document.getElementById("generate");
boredApp.randomButton = document.getElementById("random");
boredApp.displayActivityDiv = document.getElementById("displayActivity");

// Generate activity
boredApp.generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  boredApp.getUserData();
});

// Rnadomly generate activity
boredApp.randomButton.addEventListener("click", (e) => {
  e.preventDefault();
  boredApp.random();
});

//gets data for random activity/button
boredApp.random = () => {
  fetch("http://www.boredapi.com/api/activity")
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      const activity = jsonResponse.activity;
      console.log(jsonResponse);
      boredApp.display(activity);
    });
};

// DISPLAY SELECTED ACTIVITY TO PAGE
boredApp.display = (activity) => {
  const p = document.getElementById("activityP");
  p.innerHTML = ` &#128150; ${activity} together  &#128150; `;
};

// IN CASE ACTIVITY ISN'T FOUND WITH THE PARAMETERS
boredApp.tryAgain = (activity) => {
  const p = document.getElementById("activityP");
  p.innerHTML = ` &#128150; Try again &#128150; `;
};

// GET VALUES FROM USER
boredApp.getUserData = () => {
  const activityVal = document.getElementById("people").value;
  const maxPrice = document.getElementById("price").value;
  const url = new URL(boredApp.url);
  //defines search params
  url.search = new URLSearchParams({
    type: activityVal, //type refers to style of activity
    minprice: 0,
    maxprice: maxPrice,
  });

  //uses search params to create endpoint to fetch data
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      const genActivity = jsonResponse.activity;
      //if statement incase you get an undefined activity aka params dont match
      if (genActivity === undefined) {
        boredApp.tryAgain();
      } else {
        boredApp.display(genActivity);
      }
    });
};


const weatherApp = {};

weatherApp.form = document.querySelector("form");
weatherApp.url = "https://api.openweathermap.org/data/2.5/weather";
weatherApp.apiKey = "46b73165b95ad3c8b3d3ecd596052a25";

const url = new URL(weatherApp.url);

// SEARCH CITY FUNCTION

weatherApp.searchCity = (cityName) => {
  url.search = new URLSearchParams({
    q: cityName + ",CA",
    appid: weatherApp.apiKey,
    units: "metric",
  });
  console.log(url.search)
  weatherApp.fetchData(url);
};

// SEARCH FOR THE CITY

weatherApp.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = document.getElementById("city").value;
  weatherApp.searchCity(city);
});

weatherApp.fetchData = (url) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      const weatherData = {
        mainTemp: jsonResponse.main.temp,
        feelsLike: jsonResponse.main.feels_like,
        windSpeed: jsonResponse.wind.speed,
        cloudData: jsonResponse.weather[0].main,
        icon: jsonResponse.weather[0].icon,
        place: jsonResponse.name,

      };
      weatherApp.displayWeather(weatherData);
    })
    .catch(weatherApp.wrongCity);

// DISPLAY THE WEATHER TO THE SCREEN

weatherApp.displayWeather = (weather) => {
  const weatherDisplay = document.querySelector(".weatherDisplay");
  const city = document.querySelector(".city");
  const sky = document.querySelector(".sky");
  const temp = document.querySelector(".temp");

  city.innerText = `${weather.place}`;
  temp.innerText = `${Math.round(weather.feelsLike)} \u2103 `;
  sky.innerText = `${weather.cloudData}`;

  const img = document.querySelector(".iconImage");
  img.src = `http://openweathermap.org/img/wn/${weather.icon}.png`;
  img.alt = "Icon representing the weather";
  img.classList.add("icon");

  weatherDisplay.appendChild(img);
};

// IF CITY IS WRONG

weatherApp.wrongCity = () => {
  document.getElementById("city").value = "";
  alert("Could not find city try again");
};

// POP MODAL FEATURE

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popUp").style.display = "block";
  });
})

document.querySelector("#closePop").addEventListener("click", function () {
  document.querySelector(".popUp").style.display = "none";
});

document.querySelector("#info").addEventListener("click", function () {
  document.querySelector(".popUp").style.display = "block";
});
//STRETCH GOAL API
// DISPLAY WEATHER IN TORONTO
// DISPLAY WEATHER INFORMATION FOR THE CURRENT DAY (MAYBE THE USER WOULD LIKE TO RETHINK THEIR DATE IF IT'S RAINING)
// MORE STRETCH: DISPLAY WEATHER TOP OF THE FORM FOR THE WEEK SO THE USER CAN PLAN THERE FUTURE DATE

// HOW SEARCH PARAMS ARE SETUP
//http://www.boredapi.com/documentation
//url:http://www.boredapi.com/api/

//random == http://www.boredapi.com/api/activity/
//#of people == /activity?participants=1
//price == /activity?price=0.0 =>with a a
