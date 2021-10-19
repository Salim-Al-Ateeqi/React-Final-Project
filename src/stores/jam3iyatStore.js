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

  createJam3iyat = async (newJam3iya) => {
    try {
      const res = await api.post("/jam3ya", newJam3iya);
      this.jam3iyat.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const jam3iyatStore = new Jam3iyatStore();
jam3iyatStore.fetchJam3iyat();
export default jam3iyatStore;
