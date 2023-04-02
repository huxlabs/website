import Header from '../components/header.js';
import toggleMenu from './toggleMenu.service.js';

export default function renderHeader() {
   // Get the header element from the DOM
  const header = document.getElementById('header');
  
  // Add the header HTML to the header element
  header.innerHTML = Header();

  // Get the menu element from the DOM
  const menu = document.getElementById('menu');

  // Add an event listener to the menu element that calls toggleMenu when clicked
  menu.addEventListener('click', toggleMenu);

  // Indicate that the function has finished executing
  return undefined;
}
