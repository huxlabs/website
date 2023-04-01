export default function toggleMenu() {
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

// export default function toggleMenu() {
//   const menuIcon = document.getElementById('menu');
//   const navView = document.getElementById('nav');
//   const navLinks = document.querySelectorAll('.link');
//   const delay = 500; // Delay before animating links (ms)

//   // Toggle menu icon and navigation view classes
//   menuIcon.classList.toggle('active');
//   navView.classList.toggle('active');

//   // Toggle active class for each navigation link with delay
//   let startTime = null;
//   const animateLinks = (timestamp) => {
//     if (!startTime) startTime = timestamp;
//     const elapsedTime = timestamp - startTime;
//     const delayElapsed = elapsedTime - delay;
//     navLinks.forEach((link, index) => {
//       if (delayElapsed > index * 200) {
//         link.classList.add('active');
//       }
//     });
//     if (delayElapsed < navLinks.length * 200) {
//       requestAnimationFrame(animateLinks);
//     }
//   };
//   requestAnimationFrame(animateLinks);
// }
