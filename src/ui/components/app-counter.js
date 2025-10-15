import { html, css } from 'lit';
import { BaseComponent } from './base-component.js';
import { container } from '../../application/di/container.js';

export class AppCounter extends BaseComponent {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 1rem;
    }
    button {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      background-color: #6200ee;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = container.repository.load().value;
  }

  increment() {
    const counter = container.incrementUseCase.execute();
    this.count = counter.value;
  }

  reset() {
    container.service.reset();
    this.count = 10;
  }

  render() {
    return html`
      <h3 id="count-label">Contador: ${this.count}</h3>
      <button aria-labelledby="count-label" @click=${this.increment}>Incrementar</button>
      <button @click=${this.reset}>Reiniciar</button>
    `;
  }
}

customElements.define('app-counter', AppCounter);
