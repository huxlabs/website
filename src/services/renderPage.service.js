export default function renderPage({ layout, view }) {
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
    <hr>
    <p class='content'>${view.content}</p>
    <form id='contact-form'>
      <input type="text" name="_honey" style="display:none">
      <input type="text" name="name" id="name" placeholder="Name" required>
      <input type="email" name="email" id="email" placeholder="Email" required>
      <textarea name="message" id="message" rows="5" placeholder="Message" required></textarea>
      <button type="submit">Send Good Vibes</button>

      <input type="hidden" name="_subject" value="New submission!">
      <input type="hidden" name="_template" value="box">
    </form>
  </section>
`

// LOST
let templateFour = (view) => `
  <section>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
  </section>
`
