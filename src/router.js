import { createWebHistory, createRouter } from 'vue-router';

import LoginForm from "@/components/Login/LoginForm";
import LoginKeypad from "@/components/Login/LoginKeypad";

const routes = [
  {
    path: "/",
    component: LoginForm
  },
  {
    path: "/password",
    component: LoginKeypad
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;