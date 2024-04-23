let chosenCity = 'Atlanta';
// let chosenCity = document.getElementById('city').value;


function getWeatherData(lat, lon){
fetch(
    'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=28d152345e91987cbfc03a794bbf7131'
)
.then(function(response){ 
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log('Done')
})
}


function getLatLon(){
    fetch(
    'https://api.openweathermap.org/geo/1.0/direct?q=' + chosenCity + '&limit=1&appid=28d152345e91987cbfc03a794bbf7131'
)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(parseFloat(data[0].lat.toFixed(2)));
    console.log(parseFloat(data[0].lon.toFixed(2)));
    console.log(data)

    let lat = parseFloat(data[0].lat.toFixed(2));
    let lon = parseFloat(data[0].lon.toFixed(2));
    getWeatherData(lat, lon);
})
};

getLatLon();