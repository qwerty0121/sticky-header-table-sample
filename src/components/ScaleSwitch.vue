<script setup>
defineProps({
  name: { type: String, required: true },
});
const model = defineModel({ type: String, default: "1" });

const scaleOptions = ["1", "0.8", "0.66"];
</script>

<template>
  <div>
    <template v-for="option in scaleOptions">
      <label>
        <input type="radio" :name :value="option" v-model="model" />
        <span>{{ option }}</span>
      </label>
    </template>
  </div>
</template>
