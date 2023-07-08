import flatpickr from 'flatpickr';
import { Report } from 'notiflix/build/notiflix-report-aio';


    const datePicker = document.getElementById('datetime-picker');
    const startButton = document.querySelector('button[data-start]');
    const days = document.querySelector('[data-days]');
    const hours = document.querySelector('[data-hours]');
    const mins = document.querySelector('[data-minutes]');
    const secs = document.querySelector('[data-seconds]');
    


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

 // Function to calculate time remaining until the end date
 function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }


  