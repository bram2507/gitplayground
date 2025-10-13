export class Counter {
  constructor(value = 0) {
    this.value = value;
  }

  increment() {
    this.value+5;
  }

  reset() {
    this.value = 0;
  }
}
