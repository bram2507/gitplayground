import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { CounterService } from '../../src/domain/services/counter.service.js';
import { Counter } from '../../src/domain/entities/counter.entity.js';

describe('CounterService con Sinon', () => {
  let repoMock, service;

  beforeEach(() => {
    repoMock = {
      save: sinon.spy(),
      load: sinon.stub().returns(new Counter(0)),
    };
    service = new CounterService(repoMock);
  });

  it('debe incrementar y guardar usando el repositorio mockeado', () => {
    const counter = service.increment();
    expect(counter.value).to.equal(1);
    expect(repoMock.save.calledOnce).to.be.true;
    expect(repoMock.load.calledOnce).to.be.true;
  });

  it('debe resetear el contador', () => {
    const counter = service.reset();
    expect(counter.value).to.equal(0);
    sinon.assert.called(repoMock.save);
  });
});
