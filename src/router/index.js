import { createRouter, createWebHistory } from "vue-router";
import GridTableView from "../views/GridTableView.vue";
import SubGridTableView from "../views/SubGridTableView.vue";
import TableView from "@/views/TableView.vue";

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
      meta: {
        viewName: "GridTable",
      },
    },
    {
      path: "/sub-grid-table",
      name: "sub-grid-table",
      component: SubGridTableView,
      meta: {
        viewName: "SubGridTable",
      },
    },
    {
      path: "/table",
      name: "table",
      component: TableView,
      meta: {
        viewName: "Table",
      },
    },
  ],
});

export default router;
