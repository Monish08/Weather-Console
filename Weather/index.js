const apikey = "72f4db2f9d8cfd1fb01f4c69683bcdbf";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchinput= document.querySelector(".search input");
const searchbuttonElement = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function chechweather(city) {
    const Response = await fetch(apiURL + `&q=${city}` + `&appid=${apikey}`);
    if(Response.status === 404)
    {
        document.querySelector('.error').style.display = "block";
        
        document.querySelector('.weather').style.display = "none";
    }
    else{
        const data = await Response.json();

    document.querySelector(".js-city").innerHTML = data.name;
    document.querySelector(".js-temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".js-humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".js-wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png"; 
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png" ;
        }
    else if(data.weather[0].main === "Rain")
    {
        weatherIcon.src = "weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src ="weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main === "snow"){
        weatherIcon.src ="weather-app-img/images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector('.error').style.display = "none";
    }
}
function presskey(event)
{
    if(event.key == "Enter")
    {
        const inputElement = document.querySelector(".search input");
        chechweather(inputElement.value);
    }
}
searchinput.addEventListener("keydown",(event) =>{
    presskey(event);
})

searchbuttonElement.addEventListener("click", () => {
    const inputElement = document.querySelector(".search input");
    chechweather(inputElement.value);
})

