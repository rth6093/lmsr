// @/store/auth/auth.js
// @/store/auth/auth.js

import { createStore } from 'vuex';
import axios from 'axios';  // Import Axios for making HTTP requests

const authStore = createStore({
  state() {
    return {
      accessToken: null,
      refreshToken: null,
      // other authentication-related state
    };
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
    },
    // other mutations
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        // Make an API request to your backend to authenticate the user
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        });

        // Assuming the backend returns tokens upon successful authentication
        const { accessToken, refreshToken } = response.data;

        // Set tokens in state using mutations
        commit('setAccessToken', accessToken);
        commit('setRefreshToken', refreshToken);

        // You might also perform other actions after successful login

        return true; // Indicate that login was successful
      } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Authentication failed'); // Indicate that login failed
      }
    },
    // other actions
  },
  getters: {
    isAuthenticated(state) {
      return !!state.accessToken;
    },
    // other getters
  },
});

export default authStore;
