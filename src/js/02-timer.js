import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

    const datePicker = document.getElementById('datetime-picker');
    const startButton = document.querySelector('button[data-start]');
    const days = document.querySelector('[data-days]');
    const hours = document.querySelector('[data-hours]');
    const mins = document.querySelector('[data-minutes]');
    const secs = document.querySelector('[data-seconds]');

    const options = {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose(selectedDates) {
        targetDate = selectedDates[0];
        if (targetDate.getTime() < options.defaultDate.getTime()) {
          Notiflix.Report.warning(
            'You chose date in the past',
            'Please choose a date in the future',
            'Okay'
          );
          startButton.classList.remove('valid-date');
          startButton.classList.add('invalid-date');
        } else {
          startButton.classList.remove('invalid-date');
          startButton.classList.add('valid-date');
        }
      },
    };

  flatpickr(datePicker, options);
    
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

  let targetDate = null;
  let timer = null;
  const interval = 1000;

  startButton.addEventListener('click', () => {
    if (targetDate && !timer) { 
      timer = setInterval(() => {
        let currentDateInMs = new Date().getTime();
        let timeDiff = targetDate.getTime() - currentDateInMs;
  
        if (timeDiff <= 0) {
          clearInterval(timer);
          timer = null;
          timeDiff = 0;
        }
  
        let remainingTime = convertMs(timeDiff);
        const timeElements = {
          days: days,
          hours: hours,
          minutes: mins,
          seconds: secs,
        };
  
        Object.keys(timeElements).forEach((element) => {
          timeElements[element].textContent = String(remainingTime[element]).padStart(2, '0');
        });
      }, interval);
    }
  });

  const resetButton = document.getElementById('resetButton');

  resetButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    targetDate = null;
  
    days.textContent = '00';
    hours.textContent = '00';
    mins.textContent = '00';
    secs.textContent = '00';
  
    startButton.disabled = false;
  });
  

  
  
    
  
     
  
   
  
   
  
