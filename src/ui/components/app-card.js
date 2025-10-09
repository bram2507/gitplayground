import { LitElement, html, css } from 'lit';
export class AppCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      background: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 1rem;
    }
  `;
  static properties = { title: { type: String } };
  render() {
    return html`
      <section role="region" aria-label="${this.title}">
        <h2>${this.title}</h2>
        <slot></slot>
      </section>
    `;
  }
}
customElements.define('app-card', AppCard);
