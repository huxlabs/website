// Components
import Loader from '../components/loader.js'
import Header from '../components/header.js'
import Nav from '../components/nav.js'

// Scripts
import { loadView } from './router.js'
import { animate } from './animations.js'
import { toggleMenu } from './menu.js'

const initiateApp = {
  init: async function() {
    await initiateLoader();
    await initiateMenu();
    initiateNav();
  }
}

const initiateLoader = async () => {
  document.querySelector('main').innerHTML = await Loader();

  let loader = document.querySelector('#loader');
  let progress = document.querySelector('#progress');

  progress.addEventListener('animationend', () => {
    loader.style.opacity = '0';
  });

  loader.addEventListener('transitionend', async () => {
    await loader.remove();
    loadView();
  });
}

const initiateMenu = async () => {
  document.getElementById('header').innerHTML = await Header();
  document.getElementById('menu').addEventListener('click', toggleMenu);
}

const initiateNav = async () => {
  document.getElementById('nav').innerHTML = await Nav();

  let links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      let desiredRoute = link.getAttribute('href');
      let currentRoute = window.location.pathname;

      e.preventDefault()

      if (desiredRoute !== currentRoute) {
        history.pushState(null, '', `${desiredRoute}`);
        toggleMenu();
        animate('out');
        setTimeout(() => { loadView(); }, 1000)
      }
      else toggleMenu();
    })
  })
  // Handle back and forward navigation
  window.onpopstate = () => {
    animate('out');
    setTimeout(() => { loadView(); }, 1000)
  };
}

export default initiateApp;
