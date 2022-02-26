export function animate(type) {
  let menuIcon = document.getElementById('menu');
  let title = document.querySelector('.title');
  let subtitle = document.querySelector('.subtitle');
  let description = document.querySelector('.description');
  let content = document.querySelector('.content');
  let subcontent = document.querySelector('.subcontent');
  let listItems = document.querySelectorAll('.list-item');
  
  if (type === 'in') {
    setTimeout(() => {
      title.classList.toggle('fade')
    }, 100)
  
    setTimeout(() => {
      description.classList.toggle('fade')
      content.classList.toggle('fade')
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
        }, (index * 200) + 1500)
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
      content.classList.toggle('fade')
    }, 150)
    
    setTimeout(() => {
      description.classList.toggle('fade')
    }, 200)
  
    setTimeout(() => {
      title.classList.toggle('fade')
    }, 250)
  }
  
  setTimeout(() => {
    menuIcon.classList.toggle('loaded');
  }, 700)  
}
