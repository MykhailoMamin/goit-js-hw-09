import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let delay = Number(delayInput.value);
  let step = Number(stepInput.value);
  let amount = Number(amountInput.value);
  let posiotion = 0;

  for (let i = 1; i <= amount; i += 1) {
    posiotion = i;
    createPromise(posiotion, delay)
      .then(({ posiotion, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${posiotion} in ${delay}ms`);
      })
      .catch(({ posiotion, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${posiotion} in ${delay}ms`);
      });
    delay += step;
  }
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
