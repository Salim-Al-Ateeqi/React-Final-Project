import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3iyatStore {
  jam3iyat = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchJam3iyat = async () => {
    try {
      const res = await api.get("/jam3ya");
      this.jam3iyat = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  createJam3iyat = (newJam3iya) => {};
}

const jam3iyatStore = new Jam3iyatStore();
jam3iyatStore.fetchJam3iyat();
export default jam3iyatStore;
