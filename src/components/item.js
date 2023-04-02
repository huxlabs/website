const Item = (item) => {
  const template = document.createElement('template');
  template.innerHTML = `
    <li class='list-item'>
      <span class='bullet'>/ </span>
      ${item}
    </li>
  `;
  return template.content.cloneNode(true);
}

export default Item;
