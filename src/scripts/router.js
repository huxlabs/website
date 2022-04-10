// Components
import Investment from '../components/investment.js'
import Item from '../components/item.js'
import Domain from '../components/domain.js'

// Scripts
import { animate } from './animations.js'
import Page from './page.js'

export async function loadView() {
  const route = window.location.pathname;
  const container = document.querySelector('main');

  switch (route) {
    case '/':
    container.innerHTML = await Page({ layout: 'hero', view: home });
    break;

    case '/entrepreneur':
    container.innerHTML = await Page({ layout: 'standard', view: entrpreneur })
    loadIdeas();
    break;

    case '/investor':
    container.innerHTML = await Page({ layout: 'standard', view: investor });
    loadInvestments();
    break;

    case '/developer':
    container.innerHTML = await Page({ layout: 'standard', view: developer });
    loadDomainNames();
    break;

    case '/connect':
    container.innerHTML = await Page({ layout: 'connect', view: connect });
    break;

    default:
    container.innerHTML = await Page({ layout: 'lost', view: lost });
    break;
  }

  animate('in');
}

const home = {
  title: "Make epic sh<span class='accent'>*</span>t.",
  description: "I'm Chris Huxley, a software developer, investor, and entrepreneur based in D.C."
}

const entrpreneur = {
  title: 'Entrepreneur',
  description: 'en<span>&#183;</span>tre<span>&#183;</span>pre<span>&#183;</span>neur, <span>noun</span> : someone in the pursuit of opportunity at the expense of an average life.',
  content: "As an entrepreneur, I spend my time <span class='underline'>dreaming</span>, <span class='underline'>planning</span>, <span class='underline'>building</span>, and <span class='underline'>launching</span> my own ideas through <em>HuxLabs</em>, my personal venture studio. To help bring these ideas to life, I'm always seeking to collaborate with amazing people. If any of these opportunities interest you, let me know.",
  subtitle: 'Focus Areas',
  subcontent: 'Below is a curated list of my active investments.',
  selector: 'ideas'
}

const investor = {
  title: 'Investor',
  description: 'in<span>&#183;</span>ves<span>&#183;</span>tor, <span>noun</span> : one who deploys their capital to help others pursue their dreams.',
  content: 'Being an investor has a lot of rewards.',
  subtitle: 'My Portfolio',
  subcontent: 'Below is a curated list of my active investments.',
  selector: 'investments',
}

const developer = {
  title: 'Developer',
  description: 'de<span>&#183;</span>vel<span>&#183;</span>op<span>&#183;</span>er, <span>noun</span> : one who organizes 1s and 0s to bring about a certain result.',
  content: 'It\'s not about what you make. It\'s about what you make happen. There\'s something so beautiful about bringing an idea to life. What was once a distant thought, a voice in your head, is now tangible. It\'s a gamechanging product, an innovative technology, or a ledgendary movement.',
  subtitle: '',
  subcontent: '',
  selector: 'domains'
}

const connect = {
  title: 'Connect',
  description: 'con<span>&#183;</span>nect, <span>verb</span> : something we all fail to do enough.',
  content: 'If you made it this far, you might as well reach out. Even if it\'s just to say hello.'
}

const lost = {
  title: 'You seem to have lost your way.',
  description: 'Select the menu to get back on track.'
}

const investments = [
  { name: 'NowRx', link: 'https://nowrx.com/' },
  { name: 'Miso Robotics', link: 'https://misorobotics.com' },
  { name: 'Winc', link: 'https://www.winc.com/' },
  { name: 'Ethereum', link: 'https://ethereum.org/en/' },
  { name: 'Amp', link: 'https://amptoken.org/' }
]

const loadInvestments = () => {
   investments.forEach(investment => {
     document.querySelector('#investments').appendChild(Investment(investment.name, investment.link))
  })
}

const domainNames = [
  'campuscreatives.com',
  'riddlemethat.org',
  'netwerking.co',
  'something2believe.in',
  'somethingtobelieve.in',
  'toldby.us',
  'undergroundstudios.org',
  'valorpublishing.com'
]

const loadDomainNames = () => {
   domainNames.forEach(domain => {
     document.querySelector('#domains').appendChild(Domain(domain))
  })
}

const ideas = [
  'Illustrator for a children\'s book',
  'Podcast cover artist',
  'Graphic designer for digital assets',
  'Animator for digital assets',
  'Co-founding a new type of design studio',
  'Innovating a particular automotive operation',
  'Innovating the hiring process',
  'Fundraising for the culinary arts',
  'Hosting a podcast',
  'Launching a new type of puzzle company',
  'Providing financial education to our youth'
]

const loadIdeas = () => {
   ideas.forEach(idea => {
     document.querySelector('#ideas').appendChild(Item(idea))
  })
}
