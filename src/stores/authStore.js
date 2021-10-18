import { makeObservable, observable, action, makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      signin: action,
      signout: action,
    });
  }

  setUser = (token) => {
    localStorage.setItem("key", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await api.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    localStorage.removeItem("key");
    delete api.defaults.headers.common.Authorization;
    this.user = null;
  };

  checkForToken = () => {
    const token = localStorage.getItem("key");
    if (token) {
      this.setUser(token);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
// need to add that it shows user without refresh
export default authStore;
