
const boredApp = {}
//url endpoint for random and start point for search params
boredApp.url = "http://www.boredapi.com/api/activity"

boredApp.generateButton = document.getElementById("generate")
boredApp.randomButton = document.getElementById("random")
boredApp.displayActivityDiv = document.getElementById("displayActivity")

//event listener for buttons
//both lead to display() to display
boredApp.generateButton.addEventListener('click', (e) =>{
    e.preventDefault()
    boredApp.getUserData()
    
})

boredApp.randomButton.addEventListener("click", (e) =>{
    e.preventDefault()
    boredApp.random()
})

//gets data for random activity/button
boredApp.random = () => {
    fetch("http://www.boredapi.com/api/activity")
        .then((res) => {
            return res.json();
        })
        .then((jsonResponse) => {
            const activity = jsonResponse.activity
            console.log(jsonResponse)
            boredApp.display(activity)
            
        })
}

//drycode to present items
boredApp.display = (activity) =>{
    const p = document.getElementById('activityP')
    p.innerHTML = `&#128150; &#128150; &#128150; ${activity} together  &#128150; &#128150; &#128150;`
}

//error code for unmatched params
boredApp.tryAgain = (activity) =>{
    const p = document.getElementById('activityP')
    p.innerHTML = ` &#128150; &#128150; &#128150; Try again &#128150; &#128150; &#128150;`
}


//search generator for generate button
boredApp.getUserData = () => {
    const activityVal= document.getElementById('people').value
    const maxPrice = document.getElementById("price").value
    const url = new URL(boredApp.url)
   //defines search params
    url.search = new URLSearchParams({
        "type": activityVal, //type refers to style of activity 
        "minprice": 0,
        "maxprice": maxPrice,
    })

    //uses search params to create endpoint to fetch data
    console.log(url)
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((jsonResponse) => {
            const genActivity = jsonResponse.activity
            //if statement incase you get an undefined activity aka params dont match
            if (genActivity === undefined){
                boredApp.tryAgain()
            }else {
                boredApp.display(genActivity)
            }
        
        })
}

boredApp.init = () => {
}
  //do we need init for event listeners??

boredApp.init()

//button random completed
//add generate params
//add stylings
//add weather last 


const weatherApp = {}


weatherApp.url = "https://api.openweathermap.org/data/2.5/weather"
weatherApp.apiKey = "46b73165b95ad3c8b3d3ecd596052a25"

const url = new URL(weatherApp.url)
url.search = new URLSearchParams({
    "q": "toronto",
    "appid": weatherApp.apiKey,
    "units": "metric"
})

// weatherApp.fetchData = () => 
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((jsonResponse) => {
        const weatherData = {
            mainTemp: (jsonResponse.main.temp),
            feelsLike: (jsonResponse.main.feels_like),
            windSpeed: (jsonResponse.wind.speed),
            cloudData: (jsonResponse.weather[0].main)
        }
        weatherApp.displayWeather(weatherData)

    })


weatherApp.displayWeather = (weather) => {
    const p = document.createElement('p');
    const weatherDisplay = document.querySelector('.weatherDisaply');
    // p.innerText(${weather.mainTemp})

    // weatherDisplay.appendChild(p.innerText(${Math.round(weather.mainTemp)}))
}




// weatherApp = {}

// weatherApp.url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apikey}`
// weatherApp.apikey = "dbc0821b5bd7f5f1698ab2fdcd1e5893";

// weatherApp.getLocation = () => {
//     const url = new Url(weatherApp.url)
//     const url.search = new Search URLSearchParams({
//         q
//     })
// }

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
