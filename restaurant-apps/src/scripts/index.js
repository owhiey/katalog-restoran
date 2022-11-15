/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
// import data from '../DATA.json';
import App from './views/app';
import swRegister from './utils/sw-register';

// const menu = document.querySelector('#hamburgerButton');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', (e) => {
//   drawer.classList.toggle('open');
//   e.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', (e) => {
//   drawer.classList.remove('open');
//   e.stopPropagation();
// });

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('main').focus();
});

// const cards = document.querySelector('.cards');
// console.log(data);

// const listRestaurant = (data) => {
//   cards.innerHTML = '';
//   data.forEach((resto) => {
//     const {
//       name,
//       description,
//       pictureId,
//       city,
//       rating,
//     } = resto;
//     const listResto = document.createElement('div');
//     listResto.innerHTML = `
//         <article class="card-item">
//         <img class="card-item__thumbnail" src="${pictureId}" width="100%" height="250" alt="gambar restoran indonesia">
//         <p class="card-item__badge">${city}</p>
//         <div class="card-item__content">
//             <p class="card-item__rating">Rating ${rating}</p>
//             <h2 class="card-item__title"><a href="#">${name}</a></h2>
//             <p class="card-item__description">${description}</p>
//         </div>
//         </article>
//         `;
//     cards.appendChild(listResto);
//   });
// };
// listRestaurant(data.restaurants);
