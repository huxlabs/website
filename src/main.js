// Styles
import './style/main.scss'

// Services
import handleLoader from './scripts/services/handleLoader.service.js'
import displayHeader from './scripts/services/displayHeader.service.js';
import initiateNav from './scripts/services/initiateNav.service.js';

import { loadView } from './scripts/router/router';

async function createApp() {
  await handleLoader();
  await displayHeader();
  initiateNav();
  loadView();
}

createApp()
