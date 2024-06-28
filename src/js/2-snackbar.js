import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', hadlerSetDelayPromise);

function hadlerSetDelayPromise(evt) {
  evt.preventDefault()

  const delay = evt.target.elements.delay.value;
  const state = evt.target.elements.state.value;
  createPromise(delay, state)
      .then((delay) => {
         iziToast.show({
           message: `✅ Fulfilled promise in ${delay}ms`,
           position: 'topRight',
           color: 'green',
         });
    })
      .catch((delay) => {
         iziToast.show({
           message: `❌ Rejected promise in ${delay}ms`,
           position: 'topRight',
           color: 'red',
         });
    });
}

function createPromise(delay, state) {
  return new Promise((res, rej) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        res(delay);
      },delay);
    } else {
    }
    setTimeout(() => {
      rej(delay);
    },delay);
  });
}
