import Loader from '../components/TheLoader.js';

export default async function handleLoader() {
  addLoader();
  await removeLoader();
}

function addLoader() {
  document.querySelector('main').innerHTML = Loader();
}

async function removeLoader() {
  const loader = document.querySelector('#loader');
  const progress = document.querySelector('#progress');
  
  await new Promise((resolve) => {
    progress.addEventListener('animationend', () => {
      loader.style.opacity = '0';
    });

    loader.addEventListener('transitionend', () => {
      loader.remove();
      resolve();
    });
  });
}

// import Loader from '../components/loader.js'

// export default function handleLoader() {
//   document.querySelector('main').innerHTML = Loader();

//   const loader = document.querySelector('#loader');
//   const progress = document.querySelector('#progress');

//   return new Promise((resolve) => {
//     progress.addEventListener('animationend', () => {
//       loader.style.opacity = '0';
//     });

//     loader.addEventListener('transitionend', () => {
//       loader.remove();
//       resolve();
//     });
//   });
// };



