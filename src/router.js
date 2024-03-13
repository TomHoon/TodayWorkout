import { createWebHistory, createRouter } from 'vue-router';

import LoginForm from "@/components/Login/LoginForm";
import Test from "@/components/Login/Test";
import Chat from "@/components/Login/Chat";
import Test2 from "@/components/Login/Test2";
import LoginKeypad from "@/components/Login/LoginKeypad";
import Schedule from "@/components/Schedule/Schedule";
import Anothers from "@/components/Schedule/Anothers";

const routes = [
  {
    path: "/",
    component: LoginForm
  },
  {
    path: "/password",
    name: "Password",
    component: LoginKeypad
  },
  {
    path: "/schedule",
    component: Schedule
  },
  {
    path: "/anothers",
    component: Anothers
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;