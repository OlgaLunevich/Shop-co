import './assets/styles/style.css';

import router from './app/router/router.ts';
import { Header } from './components/header.ts';
import { Footer } from './components/footer.ts';


Header();
Footer();

document.addEventListener('DOMContentLoaded', () => {
  router.resolve();
});