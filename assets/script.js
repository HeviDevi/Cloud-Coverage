let searchEL = document.getElementById('search-btn');
let capitolEL = document.querySelectorAll('.capitol-btn');
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let searchHistoryEl = document.getElementById('search-history-list');
let searchInput = document.getElementById('city-input');
// Add the missing 'let' keyword before the function declaration
let displayWeatherData = (data) => { 
    document.getElementById('city-name').innerText = data.city.name;
    document.getElementById('minTemp0').innerText = 'Low of ' + data.list[0].main.temp_min.toFixed(0) + ' °F';
    document.getElementById('maxTemp0').innerText = 'High of ' + data.list[0].main.temp_max.toFixed(0) + ' °F';
    
    // This Displays weather data for the next 5 days using the forEach method
    //The api call that we are using returns weather data for every three hours.
    //As there are 24 hours in a day, we are getting 8 data points for each day.
    //By calling objects 8 objects apart from each other, we insure that each data point reresents a different day.
    const listNum = [0, 8, 16, 24, 32, 39];
    listNum.forEach((num, index) => {
        document.getElementById('date' + index).innerText = data.list[num].dt_txt.split(' ')[0];
        document.getElementById('temp' + index).innerText = 'Temperature: ' + data.list[num].main.temp.toFixed(0) + ' °F';
        document.getElementById('humidity' + index).innerText = 'Humidity: ' + data.list[num].main.humidity + '%';
        document.getElementById('wind' + index).innerText = 'Wind Speed: ' + data.list[num].wind.speed + ' mph';
        document.getElementById('icon' + index).src = 'https://openweathermap.org/img/wn/' + data.list[num].weather[0].icon + '.png';
    
    });
};
//fetching data from the openweathermap api using a template literal, returns temrature in fahrenheit.
function getWeatherData(chosenCity) {
    return new Promise ((resolve, reject) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${chosenCity}&appid=28d152345e91987cbfc03a794bbf7131&units=imperial`
    ) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(`Weather data for ${chosenCity} is:`, data);
        displayWeatherData(data);
        resolve(data);
    })
    .catch(function(error) {
        console.log('Invalid City Name');
        reject(error);
    })
})
}




searchEL.addEventListener('click', function(){
    let chosenCity = document.getElementById('city-input').value.trim();
    console.log(chosenCity);

    if(chosenCity !== ''){
        getWeatherData(chosenCity)
        .then(function() {
            if (!searchHistory.includes(chosenCity)) {
                // Save search history
                searchHistory.push(chosenCity);
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

                //Append new search history item
                let listItem = document.createElement('li');
                listItem.textContent = chosenCity;
                searchHistoryEl.appendChild(listItem);
                listItem.addEventListener('click', function(){
                    getWeatherData(chosenCity);
                })
            }
            searchInput.value = '';
        })
        .catch(function(error) {
            console.log('Failed to get weather data: ', error.message);
            searchInput.value = 'Invalid City Name';
            searchInput.style.color = 'red';
            
            setTimeout(function(){
            searchInput.value = ''
            searchInput.style.color = 'black';
        },1200);
        });
    }
});

capitolEL.forEach(function(btn) {
    btn.addEventListener('click', function(){
        let chosenCity = this.innerText;
        console.log(chosenCity);
        getWeatherData(chosenCity);
        searchInput.value = '';
    });
});

document.addEventListener('DOMContentLoaded', function(){
    let chosenCity = 'Atlanta';
    console.log("Atlanta is the default city for this app.");
    getWeatherData(chosenCity);
    
    let searchInput = document.getElementById('city-input');
    let searchHistoryDropdown = document.getElementById('search-history-dropdown');
    
    searchInput.addEventListener('mouseover', function() {
        if(searchHistory.length > 0) {
            searchHistoryDropdown.style.display = 'block';
        } else {
            searchHistoryDropdown.style.display = 'none';
        }
    });

    searchHistoryDropdown.addEventListener('mouseleave', function() {
        setTimeout(function(){
            searchHistoryDropdown.style.display = 'none';
        }, 1000);
    });

       // Clear the search history element
       searchHistoryEl.innerHTML = '';

   // Re-populate the search history element
    searchHistory.forEach((chosenCity) => {
        let listItem = document.createElement('li');
        listItem.textContent = chosenCity;
        searchHistoryEl.appendChild(listItem);

        listItem.addEventListener('click', function(){
            searchInput.value = chosenCity;
            getWeatherData(chosenCity);
            searchHistoryDropdown.style.display = 'none';
        });
    });
});


