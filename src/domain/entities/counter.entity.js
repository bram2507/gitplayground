export class Counter {
  constructor(value = 0) {
    this.value = value;
  }

  increment() {
    this.value+2;
  }

  reset() {
    this.value = 0;
  }
}
