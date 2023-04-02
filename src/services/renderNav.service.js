import Nav from '../components/TheNav.js'

export default function renderNav() {
  // Create nav class
  class TheNav extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = Nav();
    }
  }

  // Create custom nav element
  customElements.define('the-nav', TheNav);

  // Indicate that the function has finished executing
  return undefined;
}

// export default function renderNav() {
//   // Get the nav element from the DOM
//   const nav = document.getElementById('nav');

//   // Add the navigation HTML to the nav element
//   nav.innerHTML = Nav();
  
//   // Indicate that the function has finished executing
//   return undefined;
// };
