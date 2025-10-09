import { Router } from '@lit-labs/router';
import './pages/home-page.js';
import './pages/about-page.js';

document.body.innerHTML = `
  <app-navbar></app-navbar>
  <main id="app"></main>
`;

// simple navbar component (lightweight)
class SimpleNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="background:#6200ee;color:white;padding:0.5rem 1rem;">
        <a href="/" data-path style="color:white;margin-right:1rem;">Inicio</a>
        <a href="/about" data-path style="color:white;">Acerca</a>
      </nav>
    `;
    this.querySelectorAll('[data-path]').forEach(a=>{
      a.addEventListener('click',(e)=>{
        e.preventDefault();
        const path = a.getAttribute('href');
        window.router.goto(path);
      });
    });
  }
}
customElements.define('app-navbar', SimpleNavbar);

window.router = new Router(document.querySelector('#app'), [
  { path: '/', render: () => html`<home-page></home-page>` },
  { path: '/about', render: () => html`<about-page></about-page>` },
]);
