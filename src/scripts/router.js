// Views
import Connect from '../views/Connect.js'
import Developer from '../views/Developer.js'
import Entrepreneur from '../views/Entrepreneur.js'
import Home from '../views/Home.js'
import Investor from '../views/Investor.js'
import Lost from '../views/404.js'

// Components
import Investment from '../components/investment.js'

// Scripts
import { animate } from './animations.js'
import Page from '../views/Page.js'
 
export async function loadView() {  
  const route = window.location.pathname;
  const container = document.querySelector('main');
  
  switch (route) {
    case '/':
    container.innerHTML = await Home();
//    container.innerHTML = await Page('home', home);
    break; 
      
    case '/entrepreneur':
    container.innerHTML = await Entrepreneur();
//    container.innerHTML = await Page('test', entrpreneur)
    break;
      
    case '/investor':
    container.innerHTML = await Investor();
//    container.innerHTML = await Page(investor);
    loadInvestments();
    break;
      
    case '/developer':
    container.innerHTML = await Developer();
    break;
      
    case '/connect':
    container.innerHTML = await Connect();
    break;

    default:
    container.innerHTML = await Lost();
    break;
  }
   
  animate('in');
}

const home = {
  title: 'Make epic sh*t.',
  description: "I'm Chris Huxley, a software developer, investor, and entrepreneur based in D.C."
}

const entrpreneur = {
  title: 'En<span>&#183;</span>tre<span>&#183;</span>pre<span>&#183;</span>neur',
  description: '<span>noun</span> : someone in the pursuit of opportunity at the expense of an average life.',
  content: "As an entrepreneur, I spend my time <span class='underline'>dreaming</span>, <span class='underline'>planning</span>, <span class='underline'>building</span>, and <span class='underline'>launching</span> my own ideas through <em>HuxLabs</em>, my personal venture studio. To help bring these ideas to life, I'm always seeking to collaborate with amazing people. If any of these opportunities interest you, let me know."
}

const investor = {
  title: 'In<span>&#183;</span>ves<span>&#183;</span>tor',
  description: '<span>noun</span> : one who deploys their capital to help others pursue their dreams.',
  content: 'Being an investor has a lot of rewards.',
  selector: 'investments',
}


const investments = [
  {
    name: 'NowRx',
    link: 'https://nowrx.com/'
  },
  {
    name: 'Miso Robotics',
    link: 'https://misorobotics.com'
  },
  {
    name: 'Winc',
    link: 'https://www.winc.com/'
  },
  {
    name: 'Ethereum',
    link: 'https://ethereum.org/en/'
  },
  {
    name: 'Amp',
    link: 'https://amptoken.org/'
  },
  {
    name: 'NowRx',
    link: 'https://nowrx.com/'
  },
  {
    name: 'Miso Robotics',
    link: 'https://misorobotics.com'
  },
  {
    name: 'Winc',
    link: 'https://www.winc.com/'
  },
  {
    name: 'Ethereum',
    link: 'https://ethereum.org/en/'
  },
  {
    name: 'Amp',
    link: 'https://amptoken.org/'
  },
  {
    name: 'Ethereum',
    link: 'https://ethereum.org/en/'
  },
  {
    name: 'Amp',
    link: 'https://amptoken.org/'
  }
]

const loadInvestments = () => {
   investments.forEach(investment => {
     document.querySelector('#investments').appendChild(Investment(investment.name, investment.link))
  })
}
