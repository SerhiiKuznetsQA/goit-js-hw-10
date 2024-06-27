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
        let nowDate = new Date()
        if (selectedDates[0].getTime() < nowDate.getTime()) {
            btnStartTimer.disabled = true
            iziToast.show({
              message: 'Please choose a date in the future',
              position: 'topRight',
                color: 'red',
            });
        } else { 
           userSelectedDate =  selectedDates[0].getTime() 
            setTimerValues(userSelectedDate);
            btnStartTimer.disabled = false;
            setTimeout(() => { 
                btnStartTimer.disabled = true
            },4000)
        }
  },
};
let userSelectedDate;
let intervalTimer;
const btnStartTimer = document.querySelector("[data-start]")
const inputFiled = document.querySelector('#datetime-picker');
btnStartTimer.disabled = true;
btnStartTimer.addEventListener("click", handlerStartTime)
function handlerStartTime(evt) {
    if (evt) { 
        btnStartTimer.disabled = true
        inputFiled.disabled = true
    }
    intervalTimer = setInterval(() => {
        setTimerValues()
    }, 1000)
    
}

flatpickr('#datetime-picker', options);
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

function setTimerValues() {
    let diferencesTime = userSelectedDate - Date.now()
    const timeLeft = convertMs(diferencesTime)
    addLeadingZero(timeLeft)
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      clearInterval(intervalTimer);
        inputFiled.disabled = false;
    }
    
    
}

function addLeadingZero(timeLeft) {
    elements.days.textContent = String(timeLeft.days ).padStart(2, "0")
    elements.hours.textContent = String(timeLeft.hours ).padStart(2, "0")
    elements.minutes.textContent = String(timeLeft.minutes ).padStart(2, "0")
    elements.seconds.textContent = String(timeLeft.seconds).padStart(2, "0") 
    
}





