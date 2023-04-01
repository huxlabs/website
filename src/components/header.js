const template = () => `
  <a href='/'>
    <h1 id='name'>Huxley</h1>
  </a>
  <div class='menu' id='menu'>
    <span class='line'></span>
    <span class='line'></span>
    <span class='line'></span>
  </div>
`
export default template

// class TheHeader extends HTMLElement {
//   constructor() {
//     super();

//     this.innerHTML = `
//       <header class='header'>
//         <h1 id='name'>Huxley</h1>
//         <div class='menu' id='menu'>
//           <span class='line'></span>
//           <span class='line'></span>
//           <span class='line'></span>
//         </div>
//       </header>
//     `;
//   }
// }

// customElements.define('the-header', TheHeader);
