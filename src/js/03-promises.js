function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const firstDelay = parseInt(document.querySelector('[name="delay"]').value);
  const step = parseInt(document.querySelector('[name="step"]').value);
  const amount = parseInt(document.querySelector('[name="amount"]').value);

  for (let i = 0; i < amount; i++) {
    const currentDelay = firstDelay + i * step;
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
