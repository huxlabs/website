export function toggleMenu() {
  const menuIcon = document.getElementById('menu');
  const navView = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.link');

  menuIcon.classList.toggle('active');
  navView.classList.toggle('active');

  navLinks.forEach((link, index) => {
    setTimeout(() => {
      link.classList.toggle('active');
    }, (index * 200) + 500)
  });
};
