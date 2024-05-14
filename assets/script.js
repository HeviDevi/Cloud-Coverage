let searchEL = document.getElementById('search-btn');
let capitolEL = document.querySelectorAll('.capitol-btn');
// let chosenCity = 'London';

displayWeatherData = (data) => {

};



function getWeatherData(chosenCity) {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${chosenCity}&appid=28d152345e91987cbfc03a794bbf7131`
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

// function getWeatherData(lat, lon){
// fetch(
//     'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=28d152345e91987cbfc03a794bbf7131'
// )
// .then(function(response){ 
//     return response.json()
// })
// .then(function(data){
//     console.log(data)
//     console.log('Done')
//     displayWeatherData();
// })
// }


// function getLatLon(){
//     fetch(
//     'https://api.openweathermap.org/geo/1.0/direct?q=' + chosenCity + '&limit=1&appid=28d152345e91987cbfc03a794bbf7131'
// )
// .then(function(response){
//     return response.json()
// })

// .then(function(data){
//     console.log(parseFloat(data[0].lat.toFixed(2)));
//     console.log(parseFloat(data[0].lon.toFixed(2)));
//     console.log(data)

//     let lat = parseFloat(data[0].lat.toFixed(2));
//     let lon = parseFloat(data[0].lon.toFixed(2));
//     getWeatherData(lat, lon);
// })
// };

// getLatLon();