export class IncrementCounterUseCase {
  constructor(counterService, interceptor) {
    this.counterService = counterService;
    this.interceptor = interceptor;
  }

  execute() {
    const counter = this.counterService.increment();
    this.interceptor.intercept('increment', { value: counter.value });
    return counter;
  }
}
