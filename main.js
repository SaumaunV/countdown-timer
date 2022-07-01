const name = document.querySelector('.name');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const beginButton = document.querySelector('.begin');
const countdownSeconds = document.querySelector('.seconds');
const countdownMinutes = document.querySelector('.minutes');
const countdownHours = document.querySelector('.hours');
const countdownDays = document.querySelector('.days');
const formWrapper = document.querySelector('.form-wrapper');
const countdownWrapper = document.querySelector('.countdown-wrapper');

beginButton.addEventListener('click', startCountdown);

var countdown;

function makeCountdown() {
    let currDate = new Date();
    let endDate = new Date(`${date.value} ${time.value}`);
    let distance = endDate - currDate;
    
    if(distance <= 0){
        clearInterval(countdown);
        alert('countdown finished');
        formWrapper.style.visibility = "visible";
        countdownWrapper.style.visibility = "hidden";
        return;      
    }

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdownSeconds.innerHTML = `${seconds} seconds`;
    countdownMinutes.innerHTML = `${minutes} minutes `;
    countdownHours.innerHTML = `${hours} hours `;
    countdownDays.innerHTML = `${days} days `;
}

function startCountdown(){
    countdown = setInterval(makeCountdown, 1000);
    formWrapper.style.visibility = "hidden";
    countdownWrapper.style.visibility = "visible";
}