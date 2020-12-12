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
	// Calling Sucess Call Back Function //
	const sucessCallBack = (position) => {
		let longitude = position.coords.longitude;
		let latitude = position.coords.latitude;

		// Fetching REST API Data Of GeoLocation //
		async function geoApiData() {
			let api = await fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`);

			// Changing Api To Json Data //
			console.log(api);
		}
		geoApiData();
	}

	// Calling Error Call Back Function //
	const errorCallBack = (error) => {
		console.log(`Error Found => ${error}`);
	}

	// Getting Location With GeoLocation Navigator //
	navigator.geolocation.getCurrentPosition(sucessCallBack, errorCallBack);
} else {
	Error('Your Device Does Not Support Geo Location');
}


// Fetching All Data Needed From REST API With Async Function //
async function apiData() {
	// body...
	let api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Thecho&appid=7f6480c0040676cf62c7fa294ca443aa');
	// Json Converted Data //
	let jsonData = await api.json();

	// Serving Fetched Temp On Page //
	mainTemp.innerText = Math.round(jsonData.main.temp - 273.15);
	degreeF.innerText = Math.round(((jsonData.main.temp - 273.15) * 9 / 5) + 32) + '°F';
	degreeK.innerText = Math.round(jsonData.main.temp) + '°K';

	// SetUp Country And Place Name To Serve // 
	placeName.innerText = jsonData.name;
	countryName.innerText = jsonData.sys.country;
}
apiData();

// Listining Submit Event On Form //
form.addEventListener('submit', (event) => {
	// Preventing Page To Submit //
	event.preventDefault();
});