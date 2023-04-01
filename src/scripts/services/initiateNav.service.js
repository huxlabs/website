import Nav from '../../components/nav.js'
import toggleMenu from './toggleMenu.service.js';
import { animate } from '../animations';
import { loadView } from '../router/router.js';

export default async function initiateNav() {
  // Render the Nav component
  await renderNav();
  
  // Add click event listeners to links
  addLinkListeners();
  
  // Handle back and forward navigation
  handlePopstate();
};

const renderNav = async () => {
  const navView = document.getElementById('nav');
  navView.innerHTML = await Nav();
};

const addLinkListeners = () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });
};

const handleLinkClick = (e) => {
  const desiredRoute = e.target.getAttribute('href');
  const currentRoute = window.location.pathname;
  e.preventDefault();

  if (desiredRoute !== currentRoute) {
    // Push the new route to the history API
    history.pushState(null, '', `${desiredRoute}`);
    toggleMenu();
    animate('out');
    setTimeout(() => { loadView(); }, 1000)
  } else {
    toggleMenu();
  }
};

const handlePopstate = () => {
  window.onpopstate = () => {
    animate('out');
    setTimeout(() => { loadView(); }, 1000)
  };
};
