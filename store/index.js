// @/store/index.js

import { createPinia } from 'pinia';
import authStore from '@/store/auth/auth';

export const pinia = createPinia();

export const store = pinia.createStore({
  modules: {
    auth: authStore,
    // other modules
  },
});
