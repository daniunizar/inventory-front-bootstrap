import { defineStore } from "pinia";
import Axios from 'axios';

// defineStore(name or id of the store, options object)
export const useSessionStore = defineStore("SessionStore", {

  // state
  state: () => {
    return {
      token: '',
      user: {},
    };
  },

  // actions
  actions: {
    // User session actions
    login(token) {
      this.token = token;
      Axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    },
    logout() {
      this.$reset();

      // delete default header
      delete Axios.defaults.headers.common["Authorization"];
    },
    setUser(user) {
      this.user = user;
    }
  },

  persist: {
    enabled: true
  },

  // getters
  getters: {
    // User session getters
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    },
    getUserId: state => {
      return state.user.id;
    },
    getToken: state => {
      return state.token;
    }
  },
});