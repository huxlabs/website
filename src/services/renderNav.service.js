import Nav from '../components/nav.js'

export default function renderNav() {
  // Get the nav element from the DOM
  const nav = document.getElementById('nav');

  // Add the navigation HTML to the nav element
  nav.innerHTML = Nav();
  
  // Indicate that the function has finished executing
  return undefined;
};
