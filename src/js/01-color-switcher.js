function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

let intervalId = null;
let btnState = true;

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]')
};

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function onClickStart() {
  const colorChange = () => {
    document.body.style.backgroundColor = getRandomHexColor();
  };

  intervalId = setInterval(colorChange, 1000);
  document.body.classList.add('background-color-change');

  refs.start.setAttribute('disabled', 'disabled');
  btnState = false;
}

function onClickStop() {
  clearInterval(intervalId);
  document.body.classList.remove('background-color-change');

  refs.start.removeAttribute('disabled');
  btnState = true;
}
