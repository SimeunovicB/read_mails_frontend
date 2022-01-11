import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Leads from "../views/Leads.vue";
import AdminRegister from "../views/AdminRegister.vue";
import Users from "../views/Users.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/fdskl3r203rj9fjdk42fj0kd52dfkj342fdkfj2",
    nsmr: "AdminRegister",
    component: AdminRegister,
  },
  {
    path: "/leads",
    name: "Leads",
    component: Leads,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
