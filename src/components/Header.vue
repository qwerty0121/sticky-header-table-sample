<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const routes = router.getRoutes().filter((route) => route.meta.viewName);
console.log(routes);
</script>

<template>
  <header>
    <nav class="navigator">
      <template v-for="route in routes">
        <RouterLink :to="route.path">{{ route.meta.viewName }}</RouterLink>
      </template>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 10px;
}

.navigator {
  display: flex;
  gap: 10px;
}
</style>
