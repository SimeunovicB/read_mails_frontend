import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";

// axios.defaults.baseURL = "https://dispatch-app-backend.herokuapp.com/"
// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.baseURL = process.env.VUE_APP_SERVER_BASE_URL;

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
