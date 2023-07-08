import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const delayInput = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const delayAmount = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

  let delayValue = Number(delayInput.value);
  const stepValue = Number(delayStep.value);
  const amountValue = Number(delayAmount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += stepValue;
  }
}
