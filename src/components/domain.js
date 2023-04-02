const Domain = (domain) => {
  const template = document.createElement('template');
  template.innerHTML = `
    <li class='list-item'>
      ${domain}
    </li>
  `;
  return template.content.cloneNode(true);
}

export default Domain;
