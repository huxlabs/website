import Header from '../../components/header.js'
import toggleMenu from './toggleMenu.service.js';

export default function displayHeader() {
  document.getElementById('header').innerHTML = Header();
  document.getElementById('menu').addEventListener('click', toggleMenu);
}
