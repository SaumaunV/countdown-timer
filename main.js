const name = document.querySelector('.name');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const beginButton = document.querySelector('.begin');

beginButton.addEventListener('click', makeCountdown);

function makeCountdown() {
    // Get the current date and time
    currDate = new Date();
    console.log(currDate);
    // Subtract the current date and time from the inputted date and time
        // ? If it's negative.... ? Do nothing + Display alert msg telling them to give a date in the future OR Display countdown ended message
        // Specifically, convert date.value and time.value to UTC units. Date.UTC() will give us the milliseconds, to use as such: 
        // Date.UTC(convertedValues) - currDate = milliseconds until event
    
    // Hide the input html elements
    // Display the countdown elements (including button for setting a new countdown)

    // Run interval function to display date inside relevant countdown html elements
        // Units can be years, days, hours, minutes, seconds. Units that are zero (AND it is the current largest unit) are not displayed
    setInterval(makeCountdown, 500);
}