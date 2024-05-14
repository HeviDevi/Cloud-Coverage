let searchEL = document.getElementById('search-btn');
let capitolEL = document.querySelectorAll('.capitol-btn');

searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];


displayWeatherData = (data) => { 
document.getElementById('city-name').innerText = data.city.name;
document.getElementById('date0').innerText = data.list[0].dt_txt.split(' ')[0];
document.getElementById('currentTemp').innerText = 'Current Temperature is ' + data.list[0].main.temp.toFixed(0) + ' °F';
document.getElementById('minTemp0').innerText = 'Low of ' + data.list[0].main.temp_min.toFixed(0) + ' °F';
document.getElementById('maxTemp0').innerText = 'High of ' + data.list[0].main.temp_max.toFixed(0) + ' °F';
document.getElementById('humidity0').innerText = 'Humidity: ' + data.list[0].main.humidity + '%';
document.getElementById('wind0').innerText = 'Wind Speed: ' + data.list[0].wind.speed + ' mph';
document.getElementById('icon0').src = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';

document.getElementById('date1').innerText = data.list[8].dt_txt.split(' ')[0];
document.getElementById('minTemp1').innerText = 'Low of ' + data.list[8].main.temp_min.toFixed(0) + ' °F';
document.getElementById('maxTemp1').innerText = 'High of ' + data.list[8].main.temp_max.toFixed(0) + ' °F';
document.getElementById('humidity1').innerText = 'Humidity: ' + data.list[8].main.humidity + '%';
document.getElementById('wind1').innerText = 'Wind Speed: ' + data.list[8].wind.speed + ' mph';
document.getElementById('icon1').src = 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '.png';

document.getElementById('date2').innerText = data.list[16].dt_txt.split(' ')[0];
document.getElementById('minTemp2').innerText = 'Low of ' + data.list[16].main.temp_min.toFixed(0) + ' °F';
document.getElementById('maxTemp2').innerText = 'High of ' + data.list[16].main.temp_max.toFixed(0) + ' °F';
document.getElementById('humidity2').innerText = 'Humidity: ' + data.list[16].main.humidity + '%';
document.getElementById('wind2').innerText = 'Wind Speed: ' + data.list[16].wind.speed + ' mph';
document.getElementById('icon2').src = 'https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '.png';

document.getElementById('date3').innerText = data.list[24].dt_txt.split(' ')[0];
document.getElementById('minTemp3').innerText = 'Low of ' + data.list[24].main.temp_min.toFixed(0) + ' °F';
document.getElementById('maxTemp3').innerText = 'High of ' + data.list[24].main.temp_max.toFixed(0) + ' °F';
document.getElementById('humidity3').innerText = 'Humidity: ' + data.list[24].main.humidity + '%';
document.getElementById('wind3').innerText = 'Wind Speed: ' + data.list[24].wind.speed + ' mph';
document.getElementById('icon3').src = 'https://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '.png';

document.getElementById('date4').innerText = data.list[32].dt_txt.split(' ')[0];
document.getElementById('minTemp4').innerText = 'Low of ' + data.list[32].main.temp_min.toFixed(0) + ' °F';
document.getElementById('maxTemp4').innerText = 'High of ' + data.list[32].main.temp_max.toFixed(0) + ' °F';
document.getElementById('humidity4').innerText ='Humidity: ' + data.list[32].main.humidity + '%';
document.getElementById('wind4').innerText = 'Wind Speed: ' + data.list[32].wind.speed + ' mph';
document.getElementById('icon4').src = 'https://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '.png';

document.getElementById('date5').innerText = data.list[39].dt_txt.split(' ')[0];
document.getElementById('minTemp5').innerText = 'Low of ' + data.list[39].main.temp_min.toFixed(0) + ' °F';
document.getElementById('maxTemp5').innerText = 'High of ' + data.list[39].main.temp_max.toFixed(0) + ' °F';
document.getElementById('humidity5').innerText = 'Humidity: ' + data.list[39].main.humidity + '%';
document.getElementById('wind5').innerText = 'Wind Speed: ' + data.list[39].wind.speed + ' mph';
document.getElementById('icon5').src = 'https://openweathermap.org/img/wn/' + data.list[39].weather[0].icon + '.png';

};



function getWeatherData(chosenCity) {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${chosenCity}&appid=28d152345e91987cbfc03a794bbf7131&units=imperial`
    ) .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log('Done');
        displayWeatherData(data);
    })
}



searchEL.addEventListener('click', function(){
    let chosenCity = document.getElementById('city-input').value;
    console.log(chosenCity);
    getWeatherData(chosenCity);
});

capitolEL.forEach(function(btn) {
    btn.addEventListener('click', function(){
        let chosenCity = this.innerText;
        console.log(chosenCity);
        getWeatherData(chosenCity);
    });
});

document.addEventListener('DOMContentLoaded', function(){
    let chosenCity = 'Atlanta';
    console.log("Atlanta is the default city for this app.");
    getWeatherData(chosenCity);
});

