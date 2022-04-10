export function animate(type) {
  let name = document.getElementById('name');
  let menuIcon = document.getElementById('menu');
  let title = document.querySelector('.title');
  let subtitle = document.querySelector('.subtitle');
  let description = document.querySelector('.description');
  let content = document.querySelector('.content');
  let subcontent = document.querySelector('.subcontent');
  let listItems = document.querySelectorAll('.list-item');
  let line = document.querySelector('hr');

  if (type === 'in') {
    setTimeout(() => {
      title.classList.toggle('fade')
    }, 100)

    setTimeout(() => {
      description.classList.toggle('fade')
      if (line) line.classList.toggle('fade')
      if (content) content.classList.toggle('fade')
    }, 500)

    if (subtitle && subcontent) {
      setTimeout(() => {
        subtitle.classList.toggle('fade')
        subcontent.classList.toggle('fade')
      }, 1000)
    }

    // also on each investment and adds margin bottom
    if (listItems) {
      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.toggle('fade');
        }, (index * 200) + 1100)
      })
    }
  }

  if (type === 'out') {

    if (listItems) {
      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.toggle('fade');
        }, (index * 100) + 100)
      })
    }

    if (subtitle && subcontent) {
      setTimeout(() => {
        subtitle.classList.toggle('fade')
        subcontent.classList.toggle('fade')
      }, 100)
    }

    setTimeout(() => {
      if (content) content.classList.toggle('fade')
    }, 150)

    setTimeout(() => {
      if (line) line.classList.toggle('fade')
      description.classList.toggle('fade')
    }, 200)

    setTimeout(() => {
      title.classList.toggle('fade')
    }, 250)
  }

  setTimeout(() => {
    name.classList.toggle('loaded');
    menuIcon.classList.toggle('loaded');
  }, 700)
}
