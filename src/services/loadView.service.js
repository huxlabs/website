import Item from '../components/item.js'
import Investment from '../components/investment.js'
import Domain from '../components/domain.js'
// Views
import home from '../views/home.js';
import entrepreneur from '../views/entrepreneur.js';
import investor from '../views/investor.js';
import developer from '../views/developer.js';
import connect from '../views/connect.js';
import lost from '../views/lost.js';
// Services
import renderPage from './renderPage.service.js';
import animate from './animate.service.js';
import handleSubmit from './handleSubmit.service.js';

export default async function loadView() {
  const route = window.location.pathname;
  const container = document.querySelector('main');

  switch (route) {
    case '/':
    container.innerHTML = await renderPage({ layout: 'hero', view: home });
    break;

    case '/entrepreneur':
    container.innerHTML = await renderPage({ layout: 'standard', view: entrepreneur })

    entrepreneur.ideas.forEach(idea => {
      document.querySelector('#ideas').appendChild(Item(idea))
    })
    break;

    case '/investor':
    container.innerHTML = await renderPage({ layout: 'standard', view: investor });

    investor.investments.forEach(investment => {
      document.querySelector('#investments').appendChild(Investment(investment.name, investment.link))
    })
    break;

    case '/developer':
    container.innerHTML = await renderPage({ layout: 'standard', view: developer });

    developer.domainNames.forEach(domain => {
      document.querySelector('#domains').appendChild(Domain(domain))
    })
    break;

    case '/connect':
    container.innerHTML = await renderPage({ layout: 'connect', view: connect });

    const form = document.getElementById('my-form');
    if (form) {
      console.log('yes')
      form.addEventListener('submit', handleSubmit);
    }
    break;

    default:
    container.innerHTML = await renderPage({ layout: 'lost', view: lost });
    break;
  }

  animate('in');
}
