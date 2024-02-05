function attachEventsListeners() {

    let days = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');

    let hours = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');

    let minutes = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');

    let seconds = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', daysConvert);
    hoursBtn.addEventListener('click', hoursConvert);
    minutesBtn.addEventListener('click', minutesConvert);
    secondsBtn.addEventListener('click', secondsConvert);

    function daysConvert() {
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }
    function hoursConvert() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }
    function minutesConvert() {
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        seconds.value = minutes.value * 60;
    }
    function secondsConvert() {
        minutes.value = seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
    }
}