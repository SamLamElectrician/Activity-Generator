


// RETRIEVEDATA FROM DROPDOWN MENUS(PRICE,ACTIVITY TYPE, #OF PEOPLE) FOR SUBMISSION TO BORED API
// USING DATA RETRIVED FROM MENUS, STORE IN VARIABLES TO USE AS SEARCH PARAMETERS
// IF USER CLICKS RANDOMIZE BUTTON SUGGEST COMPLETELY RANDOM ACTIVITY FROM BORED API
//
// FETCH DATA FROM BORED API TO SUGGEST DATE BASED ON USERS INPUT
// DISPLAY DATA IN A PARAGRAPH ELEMENT IN THE MAIN SECTION
// INITIZALE BOREDAPI APP
//HOW BORED API DATA IS PRESENTED
// {
// 	"activity":"Learn a new recipe",
// 	"accessibility":0.05,
// 	"type":"cooking",
// 	"participants":1,
// 	"price":0
// }
const boredApp = {}
boredApp.url = "http://www.boredapi.com/api/activity"

boredApp.generateButton = document.getElementById("generate")
boredApp.randomButton = document.getElementById("random")
boredApp.displayActivityDiv = document.getElementById("displayActivity")


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
            boredApp.display(activity)
            
        })
}

boredApp.display = (activity) =>{
   let p = document.getElementById('activityP')
   p.innerHTML = `&#128150; &#128150; &#128150; ${activity} together  &#128150; &#128150; &#128150;`
   boredApp.displayActivityDiv.appendChild(p)
}

//random 


//search generator for generate button
boredApp.getUserData = () => {
    const numOfPpl = 3;
    const activity = "recreational";
    const maxPrice = 0.1;
    const maxaccess = 1;

    const url = new URL(boredApp.url)
    url.search = new URLSearchParams({
        "participants": numOfPpl,
        "type": activity, //type refers to style of activity 
        "minprice": 0,
        "maxprice": maxPrice,
        "minaccessibility":0,
        "maxaccessibility": maxaccess,
    })

    console.log(url)
    fetch("http://www.boredapi.com/api/activity")
        .then((res) => {
            return res.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse)
        })
}

boredApp.init = () => {
    boredApp.random()
  }

  //do we need init for event listeners??

boredApp.init()

//button random completed
//add generate params
//add stylings
//add weather last 






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
