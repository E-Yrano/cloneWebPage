function GetWeather(lat, lon){
    const api = 'bb71088292aec52320c9986b735a01ca';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoWork(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
    localStorage.setItem('lat', lat)
    localStorage.setItem('lon', lon)
    GetWeather(lat, lon);
    console.log(url)
}
function onGeoNoWork(){
    alert("can't find your location weather.");
}
if (localStorage.getItem('lat')===null){
    navigator.geolocation.getCurrentPosition(onGeoWork,onGeoNoWork);
}
else{
    const lat = localStorage.getItem('lat')
    const lon = localStorage.getItem('lon')
    GetWeather(lat, lon)
}