<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import ScaleSwitch from "./components/ScaleSwitch.vue";
import { useScale } from "./composables/useScale";

const scale = useScale();
</script>

<template>
  <Header />
  <main>
    <ScaleSwitch name="scale" v-model="scale" />
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  background-color: rgba(0, 0, 255, 0.2);
}

/* #app {
  display: flex;
  flex-direction: column;
  gap: 20px;
} */

main {
  padding: 10px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

<style scoped></style>
./composables/useScale
