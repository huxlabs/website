const Page = (type, details) => {
  
  let title = details.title;
  let description = details.description;
  let content = details.content;
  let selector = details.selector;
  
  if (type === 'home') {
    let template = () => `
      <section class='home'>
        <div>
          <h1 class='title'>${title}</h1>  
          <p class='description'>${description}</p>
        </div>
      </section>
    `
    return template();
  }
   
  let template = () => `
    <section>
      <h2 class='title'>${title}</h2>     
      <p class='description'>${description}</p>     
      <p class='content'>${content}</p>   
      <ul id='${selector}'></ul>
    </section>
  `
  
  return template();
}

export default Page


const templateOne = () => `
  <section class='home'>
    <div>
      <h1 class='title'>${title}</h1>  
      <p class='description'>${description}</p>
    </div>
`

 const templateTwo = () => `
    <section>
      <h2 class='title'>${title}</h2>     
      <p class='description'>${description}</p>     
      <p class='content'>${content}</p>   
      <ul id='${selector}'></ul>
    </section>
  `