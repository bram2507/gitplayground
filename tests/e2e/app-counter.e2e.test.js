import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixture, html } from '@open-wc/testing';
import '../../src/ui/components/app-counter.js';
import { container } from '../../src/application/di/container.js';

describe('E2E: <app-counter> flujo completo', () => {
  let element;
  let interceptorSpy;

  beforeEach(async () => {
    interceptorSpy = sinon.spy(container.interceptor, 'intercept');
    element = await fixture(html`<app-counter></app-counter>`);
  });

  afterEach(() => {
    interceptorSpy.restore && interceptorSpy.restore();
  });

  it('debe renderizar correctamente el componente', async () => {
    const title = element.shadowRoot.querySelector('h3');
    expect(title.textContent).to.include('Contador');
  });

  it('incrementa el valor al hacer clic y dispara interceptor', async () => {
    const buttons = element.shadowRoot.querySelectorAll('button');
    const incrementBtn = buttons[0];
    const label = element.shadowRoot.querySelector('#count-label');

    expect(label.textContent).to.include('0');
    incrementBtn.click();

    await element.updateComplete;
    expect(label.textContent).to.include('1');
    sinon.assert.calledOnce(interceptorSpy);
  });

  it('reinicia el contador correctamente', async () => {
    element.increment();
    element.reset();
    await element.updateComplete;

    const label = element.shadowRoot.querySelector('#count-label');
    expect(label.textContent).to.include('0');
  });
});
