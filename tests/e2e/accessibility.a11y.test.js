import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import axe from 'axe-core';
import '../../src/ui/components/app-counter.js';

describe('Accesibilidad: <app-counter>', () => {
  it('cumple reglas básicas de accesibilidad', async () => {
    const el = await fixture(html`<app-counter></app-counter>`);
    const results = await new Promise(resolve => {
      axe.run(el.shadowRoot, (err, res) => resolve(res));
    });
    expect(results.violations, JSON.stringify(results.violations, null, 2)).to.have.length(0);
  });
});
