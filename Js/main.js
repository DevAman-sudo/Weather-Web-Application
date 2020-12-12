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

// Set Api Location For Open Weather Api //
// let apiLocation = "New York" ;

// Fetching All Data Needed From REST API With Async Function //
async function apiData(apiLocation) {
	// body...
	let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${apiLocation}&appid=7f6480c0040676cf62c7fa294ca443aa`);
	// Json Converted Data //
	let jsonData = await api.json();
	console.log(jsonData.wind.speed);
	
	// Serving Temp Json Data //
	mainTemp.innerText = Math.round(jsonData.main.temp - 273.15);
	degreeF.innerText = Math.round(((jsonData.main.temp - 273.15) * 9 / 5) + 32) + '°F';
	degreeK.innerText = Math.round(jsonData.main.temp) + '°K';

	// SetUp Country And Place Name To Serve // 
	placeName.innerText = jsonData.name;
	countryName.innerText = jsonData.sys.country;
	weatherCondition.innerText = `${jsonData.wind.speed} W/speed`;

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