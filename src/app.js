// Styles
import './style/main.scss'

// Scripts
import site from './scripts/initiate.js'

const app = () => {
  site.init();
}

app();


//async function App() {
//  const template = document.createElement('template')
//  template.innerHTML = `
//    <div class="container">
//      ${Header()}
//      ${await User()}
//    </div>
//  `
//  // Return a new node from template
//  return template.content.cloneNode(true)
//}
//
//import App from './App';
//
//const app = async () => {
//  document.getElementById('app').appendChild(await App());
//};
//// Load app
//app();

//let links = document.querySelectorAll('a');
//
//if (links) {
//  links.forEach(link => {
//    let route = link.getAttribute('href');
//    
//    link.onclick = (e) => {
//      let currentRoute = window.location.pathname;
//      
//      e.preventDefault();
//        
//      if (route !== currentRoute) {
//        history.pushState(null, '', `${route}`);
//      
//        toggleMenu();
//        animate('out');
//    
//        setTimeout(() => {
////          loadView();
//        }, 1000)
//      } else {
//        toggleMenu();
//      }
//    }
//  })
//}
