import { LitElement } from 'lit';
export class BaseComponent extends LitElement {
  log(msg) {
    console.log(`[${this.tagName.toLowerCase()}] ${msg}`);
  }
}
