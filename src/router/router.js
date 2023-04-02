import loadView from "../services/loadView.service.js";
import toggleMenu from "../services/toggleMenu.service.js";
import animate from "../services/animate.service.js";

export default function createRouter() {
  // Load the initiatl view based on current URL
  loadView();

  // Listen for changes to the URL
  handlePopstate();

  // Listen for link clicks
  handleLinkClick();
}

function handleLinkClick() {
  // Add a click event listener to the document
  document.addEventListener('click', (event) => {
    // Get the clicked element
    const { target } = event;

    if (target.innerText === 'Huxley') {
      event.preventDefault();

      if (window.location.pathname !== '/') {
        const desiredRoute = '/'
        // Push the new route to the history API
        history.pushState(null, '', desiredRoute);
        // Animate the page transition
        animate('out');
        // Load the new view after a delay
        setTimeout(() => { loadView(); }, 1000)
      }
    }

    // Check if the clicked element is a link
    if (target.tagName === 'A' && target.pathname.startsWith('/')) {
      event.preventDefault();

       // Get the desired and current routes
      const desiredRoute = target.pathname;
      const currentRoute = window.location.pathname;

      if (desiredRoute !== currentRoute) {
        // Push the new route to the history API
        history.pushState(null, '', desiredRoute);

        // Close the menu
        toggleMenu();
        // Animate the page transition
        animate('out');
        // Load the new view after a delay
        setTimeout(() => { loadView(); }, 1000)
      } else {
        // Close the menu if the desired route is the same as the current route
        toggleMenu();
      }
    }
  });
}

function handlePopstate() {
  // Add a popstate event listener to the window
  window.addEventListener('popstate', () => {
    // Animate the page transition
    animate('out');
    // Load the new view after a delay
    setTimeout(() => { loadView(); }, 1000)
  });
}
