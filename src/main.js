import  {createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import  store  from './store';

axios.defaults.baseURL = "https://dispatch-app-backend.herokuapp.com/"

createApp(App).use(store).use(router).mount('#app')
