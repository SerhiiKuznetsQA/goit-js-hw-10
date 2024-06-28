import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      handleDateSelection(selectedDates[0])
        .then(() => {
          btnStartTimer.disabled = false
          btnStartTimer.classList.remove('disabled');
        })
        .catch(error => { 
          btnStartTimer.disabled = true
          btnStartTimer.classList.add('disabled');
           iziToast.show({
             message: error.message,
             position: 'topRight',
             color: 'red',
           });
        })
  },
};
let userSelectedDate;
let intervalTimer;



const btnStartTimer = document.querySelector("[data-start]")
const inputFiled = document.querySelector('#datetime-picker');
btnStartTimer.disabled = true;
btnStartTimer.classList.add('disabled');
btnStartTimer.addEventListener("click", handlerStartTime)

function handleDateSelection(date) {
  return new Promise((resolve, reject) => {
    let nowDate = new Date()
    if (date.getTime() < nowDate.getTime()) {
      reject(new Error('Please choose a date in the future'));
    } else {
      userSelectedDate = date.getTime();
      resolve(userSelectedDate);
    }
  });
}


function handlerStartTime(evt) {
    if (evt) { 
      btnStartTimer.disabled = true
      btnStartTimer.classList.add('disabled');
        inputFiled.disabled = true
    }
startTimer()
    
}

function startTimer() {
  intervalTimer = setInterval(() => { 
    updateTimer()
  },1000)
}

function updateTimer() {
  const differencesTime = userSelectedDate -  Date.now()
  if (differencesTime <= 0) {
    clearInterval(intervalTimer);
    inputFiled.disabled = false;
  } else { 
    const timeleft = convertMs(differencesTime)
    addLeadingZero(timeleft)
  }
  
}


function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(timeLeft) {
    elements.days.textContent = String(timeLeft.days ).padStart(2, "0")
    elements.hours.textContent = String(timeLeft.hours ).padStart(2, "0")
    elements.minutes.textContent = String(timeLeft.minutes ).padStart(2, "0")
    elements.seconds.textContent = String(timeLeft.seconds).padStart(2, "0") 
    
}

flatpickr('#datetime-picker', options);




