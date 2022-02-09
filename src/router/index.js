import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Schedule from "@/views/Schedule.vue";
import Media from "@/views/Media.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/media",
    name: "Media",
    component: Media,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;