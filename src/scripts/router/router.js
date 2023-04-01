import views from './views.js'
import { animate } from '../animations.js'
import Page from '../page.js'

export async function loadView() {
  const route = window.location.pathname;
  const container = document.querySelector('main');

  console.log(route)


  switch (route) {
    case '/':
    container.innerHTML = await Page({ layout: 'hero', view: views.home });
    break;

    case '/entrepreneur':
    container.innerHTML = await Page({ layout: 'standard', view: views.entrpreneur })
    views.entrpreneur.loadIdeas();
    break;

    case '/investor':
    container.innerHTML = await Page({ layout: 'standard', view: views.investor });
    views.investor.loadInvestments();
    break;

    case '/developer':
    container.innerHTML = await Page({ layout: 'standard', view: views.developer });
    views.developer.loadDomainNames();
    break;

    case '/connect':
    container.innerHTML = await Page({ layout: 'connect', view: views.connect });
    break;

    default:
    container.innerHTML = await Page({ layout: 'lost', view: views.lost });
    break;
  }

  animate('in');
}
