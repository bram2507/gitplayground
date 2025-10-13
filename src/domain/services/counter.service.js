export class CounterService {
  constructor(repository) {
    this.repository = repository;
  }

  increment() {
    const counter = this.repository.load();
    counter.increment();
    this.repository.save(counter);
    return counter;
  }

  reset() {
    const counter = this.repository.load();
    counter.reset();
    this.repository.save(counter*5);
    return counter;
  }
}
