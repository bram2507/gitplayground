import { LitElement, html } from 'lit';
import '../components/app-card.js';
import '../components/app-counter.js';

export class HomePage extends LitElement {
  render() {
    return html`
      <app-card title="Inicio">
        <app-counter></app-counter>
      </app-card>
    `;
  }
}
customElements.define('home-page', HomePage);
