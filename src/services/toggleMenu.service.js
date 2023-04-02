export default function toggleMenu() {
  // Get the menu icon and navigation elements
  const menu = document.getElementById('menu');
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.link');

  // Toggle the 'active' class on the menu icon and navigation elements
  menu.classList.toggle('active');
  nav.classList.toggle('active');

  // Loop through each navigation link and toggle the 'active' class with a staggered delay
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.toggle('active');
    }, (index * 200) + 500)
  });
};
