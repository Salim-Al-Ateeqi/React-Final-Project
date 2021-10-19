import { makeAutoObservable } from "mobx";
import api from "./api";
import authStore from "./authStore";

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

  joinJam3iya = async (jam3yaId) => {
    try {
      await api.post(`/jam3ya/join/${jam3yaId}`);
      const foundJam3iya = this.jam3iyat.find(
        (jam3iya) => jam3iya._id === jam3yaId
      );
      foundJam3iya.users.push(authStore.user);
    } catch (error) {
      console.log(error);
    }
  };

  leaveJam3iya = async (jam3yaId) => {
    try {
      await api.post(`/jam3ya/leave/${jam3yaId}`, jam3yaId);
      const tempJam3iya = this.jam3iyat.find(
        (jam3iya) => jam3iya._id === jam3yaId
      );
      tempJam3iya.users = tempJam3iya.users.filter(
        (user) => user._id !== authStore.user._id
      );
    } catch (error) {
      console.log(error);
    }
  };

  deleteJam3iya = async (jam3yaId) => {
    try {
      await api.delete(`/jam3ya/${jam3yaId}`);
      this.jam3iyat = this.jam3iyat.filter(
        (jam3iya) => jam3iya._id !== jam3yaId
      );
    } catch (error) {
      console.log(error);
    }
  };

  updateJam3iya = async (jam3yaId, updatedJam3iya) => {
    try {
      const res = await api.put(`/jam3ya/${jam3yaId}`, updatedJam3iya);
      this.jam3iyat = this.jam3iyat.map((jam3iya) =>
        jam3yaId === jam3iya._id ? res.data : jam3iya
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const jam3iyatStore = new Jam3iyatStore();
jam3iyatStore.fetchJam3iyat();
export default jam3iyatStore;
