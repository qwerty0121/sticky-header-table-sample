import { createRouter, createWebHistory } from "vue-router";
import GridTableView from "../views/GridTableView.vue";
import SubGridTableView from "../views/SubGridTableView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: "/grid-table",
    },
    {
      path: "/grid-table",
      name: "grid-table",
      component: GridTableView,
    },
    {
      path: "/sub-grid-table",
      name: "sub-grid-table",
      component: SubGridTableView,
    },
  ],
});

export default router;
