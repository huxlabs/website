import './assets/styles/main.scss';
import createRouter from './router/router';
import handleLoader from './services/handleLoader.service.js';
import renderHeader from './services/renderHeader.service.js';
import renderNav from './services/renderNav.service.js';

const createApp = async () => {
  await Promise.all([
    handleLoader(),
    renderHeader(),
    renderNav(),
  ]);
  await createRouter();
}

document.addEventListener('DOMContentLoaded', createApp);
