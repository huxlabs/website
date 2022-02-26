const Investment = (name, link) => {
  const template = document.createElement('template')
  template.innerHTML = `
    <li class='list-item'>
      <a href=${link} target='_blank'>
        ${name}
      </a>
    </li>
  `
  return template.content.cloneNode(true)
}

export default Investment