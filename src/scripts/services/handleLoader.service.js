import Loader from '../../components/loader.js'

export default function initiateLoader() {
  document.querySelector('main').innerHTML = Loader();

  const loader = document.querySelector('#loader');
  const progress = document.querySelector('#progress');

  return new Promise((resolve) => {
    progress.addEventListener('animationend', () => {
      loader.style.opacity = '0';
    });

    loader.addEventListener('transitionend', () => {
      loader.remove();
      resolve();
    });
  });
};
