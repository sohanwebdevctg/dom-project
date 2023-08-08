// api key
const API_KEY = `b65c2f09637b3a87ecee4e4aaacf1584`;

// get data in api
const loadingTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadingTemperatureData(data))
}

//loading data in api
const loadingTemperatureData = data => {
    
    // show city
    const showCity = document.getElementById('cityName');
    showCity.innerText = data.name;

    //show temperature
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;

    // show weather
    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;
}

// searching data
document.getElementById('search-btn').addEventListener('click', function (){
    const searchingField = document.getElementById('search-field');
    const city = searchingField.value;

    if(city === null || city === undefined || city === ''){
        alert('Please select a city');
    }else{
        loadingTemperature(city);
    }
})



loadingTemperature('dhaka');