import { Counter } from '../../domain/entities/counter.entity.js';
import { ICounterRepository } from '../../domain/repositories/counter.repository.interface.js';

export class CounterMemoryRepository extends ICounterRepository {
  constructor() {
    super();
    this._counter = new Counter(1);
  }

  save(counter) {
    this._counter = counter;
  }

  load() {
    return this._counter;
  }
}
