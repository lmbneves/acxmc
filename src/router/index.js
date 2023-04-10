import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Schedule from "@/views/Schedule.vue";
import Media from "@/views/Media.vue";
import Contact from "@/views/Contact.vue";
import Performer from "@/views/Performer.vue";
import Athlete from "@/views/Athlete.vue";
import Model from "@/views/Model.vue";

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
  {
    path: "/performer",
    name: "Performer",
    component: Performer,
  },
  {
    path: "/athlete",
    name: "Athlete",
    component: Athlete,
  },
  {
    path: "/model",
    name: "Model",
    component: Model,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;