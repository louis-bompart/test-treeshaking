import { B } from './b.js';

export class A {
  constructor() {
  }
  getB() {
    return new B();
  }
}