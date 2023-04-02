import Header from '../components/TheHeader.js';
import toggleMenu from './toggleMenu.service.js';

export default function renderHeader() {
  // Create custom header element
  createHeaderElement();
  // Add click event to menu icon
  attachMenuEvent();
  // Indicate that the function has finished executing
  return undefined;
}

function createHeaderElement() {
  // Create header class
  class TheHeader extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = Header();
    }
  }
  // Create custom header element
  customElements.define('the-header', TheHeader);
}

function attachMenuEvent() {
  // Get the menu element from the DOM
  const menu = document.getElementById('menu');

  // Add an event listener to the menu element that calls toggleMenu when clicked
  menu.addEventListener('click', toggleMenu);
}

// export default function renderHeader() {
//    // Get the header element from the DOM
//   const header = document.getElementById('header');
  
//   // Add the header HTML to the header element
//   header.innerHTML = Header();

//   // Get the menu element from the DOM
//   const menu = document.getElementById('menu');

//   // Add an event listener to the menu element that calls toggleMenu when clicked
//   menu.addEventListener('click', toggleMenu);

//   // Indicate that the function has finished executing
//   return undefined;
// }