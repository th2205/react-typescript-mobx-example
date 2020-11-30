import { makeAutoObservable } from "mobx";

export class Countner {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
}
