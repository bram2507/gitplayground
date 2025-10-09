import { LitElement, html } from 'lit';
export class AboutPage extends LitElement {
  render() {
    return html`
      <h2>Arquitectura Hexagonal con LitElement</h2>
      <p>Separación clara entre dominio, aplicación, infraestructura y UI.</p>
    `;
  }
}
customElements.define('about-page', AboutPage);
