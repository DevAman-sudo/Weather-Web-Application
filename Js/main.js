// JavaScript DOM Element //
const mainTemp = document.getElementById('main-temp');
const degreeF = document.getElementById('degreeF');
const degreeK = document.getElementById('degreeK');
const countryName = document.getElementById('country-name');
const placeName = document.getElementById('place-name');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const formButton = document.getElementById('form-button');

// Fetching User Geo-Location //
if ('geolocation' in navigator) {
    console.log('Avibable');
    // navigator.geolocation.getCurrentPosition( position => {
        // console.log(position);
    // });
} else {
    Error('Your Device Does Not Support Geo Location');
}


// Fetching All Data Needed From REST API With Async Function //
async function apiData() {
    // body...
    const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Thecho&appid=7f6480c0040676cf62c7fa294ca443aa');
    // Json Converted Data //
    const jsonData = await api.json();
    
    // Serving Fetched Temp On Page //
    mainTemp.innerText = Math.round(jsonData.main.temp - 273.15) ;
    degreeF.innerText = Math.round(((jsonData.main.temp - 273.15) * 9/5) + 32) + '°F' ;
    degreeK.innerText = Math.round(jsonData.main.temp) + '°K' ;
    
    // SetUp Country And Place Name To Serve //
    placeName.innerText = jsonData.name ;
    countryName.innerText = jsonData.sys.country ;
}
apiData();

// Listining Submit Event On Form //
form.addEventListener('submit' , (event) => {
    // Preventing Page To Submit //
    event.preventDefault();
});