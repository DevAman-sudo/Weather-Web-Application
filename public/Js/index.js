// JavaScript DOM Elements //
const button = document.getElementById('button');
const upTime = document.getElementById('up-time');
const downTime = document.getElementById('down-time');
const amPm = document.getElementById('am-pm');
const days = document.getElementById('days');
const months = document.getElementById('months');
const year = document.getElementById('year');

// Fetching Date And Time //
const date = new Date();
// -- //
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
let weekday = [] ;
let month = [] ;
const Year = date.getFullYear();

// Serving Time And Date //
upTime.innerText = hours ;
downTime.innerText = minutes ;

// AM and PM Formatter // Copied From Stack OverFlow //
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = ampm;
    return strTime;
}
// Serving AmPm to Main Page //
amPm.innerText = formatAMPM(date);

// Serving Days in Main Page //
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    days.innerText = weekday[date.getDay()];
    
    // Serving Months In Main Page /
    month[0] = "January",
    month[1] = "February",
    month[2] = "March",
    month[3] = "April",
    month[4] = "May",
    month[5] = "June",
    month[6] = "July",
    month[7] = "August",
    month[8] = "September",
    month[9] = "October",
    month[10] = "November",
    month[11] = "December"
    
    months.innerText = `${month[date.getMonth()]} ${date.getDate()}`;

// Serving Year In Main Page //
year.innerText = Year ;

// Changing Window Locate On Ckick //
button.addEventListener('click', (event) => {
    // Changing Page Route //
    window.location = "/forcast";

});
    // Animating Hero Comtainer Content //
    anime({
        targets: '.a1',
        translateX: -10 ,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true ,
    }); 
    anime({
        targets: '.a2',
        translateX: -10,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true,
        delay: 30
    });
    anime({
        targets: '.a3',
        translateX: -10,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true,
        delay: 60
    });