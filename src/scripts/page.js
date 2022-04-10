const Page = ({ layout, view }) => {
  switch (layout) {
    case 'hero': return templateOne(view);
    case 'standard': return templateTwo(view);
    case 'connect': return templateThree(view);
    default: return templateFour(view);
  }
}

// HERO
let templateOne = (view) => `
  <section class='home'>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
  </section>
`

// MAIN
let templateTwo = (view) => `
  <section>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
    <hr>
    <p class='content'>${view.content}</p>
    <h3 class='subtitle'>${view.subtitle}</h3>
    <p class='subcontent'>${view.subcontent}</p>
    <ul id='${view.selector}' class='${view.selector}'></ul>
  </section>
`

// CONNECT
let templateThree = (view) => `
  <section>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
    <p class='content'>${view.content}</p>
  </section>
`

// LOST
let templateFour = (view) => `
  <section>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
  </section>
`

export default Page
