// JavaScript DOM Element //
const mainTemp = document.getElementById('main-temp');
const degreeF = document.getElementById('degreeF');
const degreeK = document.getElementById('degreeK');
const weatherCondition = document.getElementById('condition');
const countryName = document.getElementById('country-name');
const placeName = document.getElementById('place-name');
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const formButton = document.getElementById('form-button');

// Fetching All Data Needed From REST API With Async Function //
async function apiData(apiLocation) {
	// body...
	let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${apiLocation}&appid=7f6480c0040676cf62c7fa294ca443aa`);
	// Json Converted Data //
	let jsonData = await api.json();

	if (jsonData.cod === '404') {
		// Changing textArea Class To error-input //
		textArea.classList = 'error-input' ;
		textArea.placeholder = 'City Not Found !!! Try Again.' ;
		
	} else if (jsonData.cod !== '404') {
		// Changing Text Area To Normal If Json Didn`t Get 404 //
		textArea.classList = 'text-area' ;
		textArea.placeholder = 'Search City ...' ;
		
		// Serving Temp Json Data //
		mainTemp.innerText = Math.round(jsonData.main.temp - 273.15);
		degreeF.innerText = Math.round(((jsonData.main.temp - 273.15) * 9 / 5) + 32) + '°F';
		degreeK.innerText = Math.round(jsonData.main.temp) + '°K';

		// SetUp Country And Place Name To Serve // 
		placeName.innerText = jsonData.name;
		countryName.innerText = jsonData.sys.country;
		weatherCondition.innerText = `${jsonData.wind.speed} W/speed`;
	}
}

// Deafult Weather Api Place Location //
apiData('New York');

// Listining Submit Event On Form //
form.addEventListener('submit', (event) => {
	// Preventing Page To Submit //
	event.preventDefault();

	// Fetching And Serving Data Of Text Area //
	apiData(textArea.value);

	// Clearing Text Area After Submitting //
	textArea.value = "";
});