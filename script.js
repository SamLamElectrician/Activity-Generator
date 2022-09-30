


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
app = {}
app.url = "http://www.boredapi.com/api/"

app.GetUserData = () => {

    const url = new URL(app.url)
    url.search = new URLSearchParams({
        //key:value pairs for accessibiblity
    })

    fetch("http://www.boredapi.com/api/")
        .then((res) => {
            return res.json();
        })
        .then((jsonResponse) => {

        })
}


weatherApp = {}

weatherApp.url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apikey}`
weatherApp.apikey = "dbc0821b5bd7f5f1698ab2fdcd1e5893";

weatherApp.getLocation = () => {
    const url = new Url(weatherApp.url)
    const url.search = new Search URLSearchParams({
        q
    })
}







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
