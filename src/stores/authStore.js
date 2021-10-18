import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
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
      this.setUser = decode(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete api.defaults.headers.common.Authorization;
    this.user = null;
  };
}

const authStore = new AuthStore();
// need to add that it shows user without refresh
export default authStore;
