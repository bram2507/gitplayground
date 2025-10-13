export class Counter {
  constructor(value = 0) {
    this.value = value;
  }

  increment() {
    this.value++;
  }

  reset() {
    this.value = 0;
  }
}
