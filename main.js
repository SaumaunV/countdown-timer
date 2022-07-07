const name = document.querySelector('.name');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const beginButton = document.querySelector('.begin');
const countdownSeconds = document.querySelector('.seconds');
const countdownMinutes = document.querySelector('.minutes');
const countdownHours = document.querySelector('.hours');
const countdownDays = document.querySelector('.days');
const formWrapper = document.querySelector('.form-wrapper');
const eventName = document.querySelector('.event-name');
const countdownWrapper = document.querySelector('.countdown-wrapper');
const resetButton = document.querySelector('.reset');

beginButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetElements);

var countdown;

function resetElements() {
    // Stop countdown
    clearInterval(countdown);

    // Make countdown form elements visible and countdown timer elements hidden
    formWrapper.style.visibility = "visible";
    eventName.innerHTML = '';
    countdownWrapper.style.visibility = "hidden";
    resetButton.style.visibility = "hidden"

    // Reset countdown html elements
    countdownDays.innerHTML = '';
    countdownHours.innerHTML = '';
    countdownMinutes.innerHTML = '';
    countdownSeconds.innerHTML = '';
}

function makeCountdown() {
    // Calculate time until event in milliseconds
    let currDate = new Date();
    let endDate = new Date(`${date.value} ${time.value}`);
    let distance = endDate - currDate;
    
    // Check whether the countdown finished
    if(distance <= 0){
        alert('Countdown Finished');
        resetElements();
        return;      
    }

    // Calculate days, hours, minutes, and seconds from milliseconds
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    // Update countdown HTML elements
    countdownDays.innerHTML = days === 0 ? '' : `${days} days `;
    countdownHours.innerHTML = countdownDays.innerHTML === '' && hours === 0 ? '' : `${hours} hours `;
    countdownMinutes.innerHTML = countdownHours.innerHTML === '' && minutes === 0 ? '' : `${minutes} minutes `;
    countdownSeconds.innerHTML = countdownMinutes.innerHTML === '' && seconds === 0 ? 'Countdown Finished' : `${seconds} seconds`;
}

function startCountdown(){
    countdown = setInterval(makeCountdown, 1000);
    formWrapper.style.visibility = "hidden";
    eventName.innerHTML = name.value;
    countdownWrapper.style.visibility = "visible";
    resetButton.style.visibility = "visible"
}