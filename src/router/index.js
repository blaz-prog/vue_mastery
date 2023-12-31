import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetail  from "@/views/EventDetail.vue"

import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList,
    },
    {
      path: "/event/:id",
      name: "event-detail",
      props:true,
      component: EventDetail,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
