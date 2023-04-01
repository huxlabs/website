import Domain from '../../components/domain.js'
import Investment from '../../components/investment.js'
import Item from '../../components/item.js'

const views = {
  home: {
    title: "Make epic sh<span class='accent'>*</span>t.",
    description: "I'm Chris Huxley, a software developer, investor, and entrepreneur based in D.C."
  },
  entrpreneur: {
    title: 'Entrepreneur',
    description: 'en<span>&#183;</span>tre<span>&#183;</span>pre<span>&#183;</span>neur, <span>noun</span> : a person in the pursuit of opportunity at the expense of an average life.',
    content: "As an entrepreneur, I spend my time <span class='underline'>dreaming</span>, <span class='underline'>planning</span>, <span class='underline'>building</span>, and <span class='underline'>launching</span> my own ideas through <em>Huxley Studios</em>, my personal venture studio. To help bring these ideas to life, I'm always seeking to collaborate with amazing people.",
    subtitle: 'Collaboration Opportunities',
    subcontent: 'If any of the collaboration opportunities below are of interest, let\'s connect.',
    selector: 'ideas',
    ideas: [
      'Illustrating a children\'s book',
      'Designing podcast cover art',
      'Creating animations',
      'Co-founding a new type of design studio',
      'Innovating a particular automotive operation',
      'Innovating the hiring process',
      'Fundraising for the culinary arts',
      'Co-hosting a podcast',
      'Launching a new type of puzzle company'
    ],
    loadIdeas: function() {
       this.ideas.forEach(idea => {
         document.querySelector('#ideas').appendChild(Item(idea))
      })
    }
  },
  investor: {
    title: 'Investor',
    description: 'in<span>&#183;</span>ves<span>&#183;</span>tor, <span>noun</span> : a person who deploys their capital to help others pursue their dreams.',
    content: 'Being an investor has a lot of rewards.',
    subtitle: 'My Portfolio',
    subcontent: 'Below is a curated list of my active investments.',
    selector: 'investments',
    investments: [
      { name: 'NowRx', link: 'https://nowrx.com/' },
      { name: 'Miso Robotics', link: 'https://misorobotics.com' },
      { name: 'Winc', link: 'https://www.winc.com/' }
    ],
    loadInvestments: function() {
       this.investments.forEach(investment => {
         document.querySelector('#investments').appendChild(Investment(investment.name, investment.link))
      })
    }
  },
  developer: {
    title: 'Developer',
    description: 'de<span>&#183;</span>vel<span>&#183;</span>op<span>&#183;</span>er, <span>noun</span> : a person who arranges 1s and 0s in a particular way that creates value in the world.',
    content: 'It\'s not about what you make. It\'s about what you make happen. There\'s something so beautiful about bringing an idea to life. What was once a distant thought, a voice in your head, is now tangible. It\'s a gamechanging product, an innovative technology, or a ledgendary movement.',
    subtitle: 'Domain Names',
    subcontent: 'Below is a curated list of domains I own. If any of them inspire an idea, let\'s connect.',
    selector: 'domains',
    domainNames: [
      'campuscreatives.com',
      'riddlemethat.org',
      'netwerking.co',
      'something2believe.in',
      'somethingtobelieve.in',
      'toldby.us',
      'undergroundstudios.org',
      'valorpublishing.com'
    ],
    loadDomainNames: function() {
       this.domainNames.forEach(domain => {
         document.querySelector('#domains').appendChild(Domain(domain))
      })
    }
  },
  connect: {
    title: 'Connect',
    description: 'con<span>&#183;</span>nect, <span>verb</span> : something we all fail to do enough.',
    content: 'If you made it this far, you might as well reach out. Even if it\'s just to say hello.'
  },
  lost: {
    title: 'You seem to have lost your way.',
    description: 'Select the menu to get back on track.'
  }
}

export default views
