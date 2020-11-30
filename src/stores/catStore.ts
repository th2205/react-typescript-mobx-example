import { makeAutoObservable } from "mobx";

export class Cat {
  catImg = "";
  constructor() {
    makeAutoObservable(this);
  }

  changeChatImg(url: string) {
    this.catImg = url;
  }
}
