import { makeAutoObservable, runInAction, toJS } from "mobx";
import axios from "axios";

export class Cat {
  catImg = "";
  catList: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async changeChatImg() {
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
    );
    const url: string = data[0].url;

    runInAction(() => {
      this.catImg = url;
    });
    runInAction(() => {
      this.catList.push(url);
    });
  }

  toJSON() {
    const js = toJS(this);

    return {
      catImg: js.catImg,
      catList: js.catList,
    };
  }
}
