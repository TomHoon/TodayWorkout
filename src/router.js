import { createWebHistory, createRouter } from 'vue-router';

import LoginForm from "@/components/Login/LoginForm";
import Chat from "@/components/Login/Chat";
import LoginKeypad from "@/components/Login/LoginKeypad";
import Schedule from "@/components/Schedule/Schedule";
import Anothers from "@/components/Schedule/Anothers";
import Feed from "@/components/Schedule/Feed";
// 
const routes = [
  {
    path: "/",
    component: LoginForm
  },
  {
    path: "/password",
    name: 'Password',
    component: LoginKeypad,
  },
  {
    path: "/schedule",
    name: 'Schedule',
    component: Schedule
  },
  {
    path: "/anothers",
    component: Feed
  },
  {
    path: "/chat",
    component: Chat
  },
  {
    path: "/notFound",
    name: "notFound",
    component: Schedule
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;