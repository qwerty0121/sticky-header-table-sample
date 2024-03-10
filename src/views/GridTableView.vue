<script setup>
import { schema, items } from "../repositories/items";
</script>

<template>
  <div class="table-container">
    <div class="grid">
      <template v-for="{ name } in Object.values(schema)">
        <div class="cell cell--header">{{ name }}</div>
      </template>
      <template v-for="item in items">
        <template v-for="key in Object.keys(schema)">
          <div class="cell cell--body">{{ item[key] }}</div>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  font-size: 0.7em;
  height: 350px;
  overflow: auto;
  position: relative;
}

.grid {
  display: grid;
  grid-template-columns:
    /* ステータス */
    minmax(70px, 2fr)
    /* 送受信日 */
    minmax(70px, 2fr)
    /* 回答希望日 */
    minmax(70px, 2fr)
    /* 締切日 */
    minmax(70px, 2fr)
    /* 種別 */
    minmax(70px, 2fr)
    /* 件名 */
    minmax(150px, 3fr)
    /* メモ */
    minmax(150px, 3fr)
    /* お客様 */
    minmax(150px, 3fr)
    /* 営業担当 */
    minmax(150px, 3fr)
    /* 代理店担当 */
    minmax(150px, 3fr);
}

.cell {
  padding: 5px;
  backface-visibility: hidden;
  overflow: hidden;
}

.cell--header {
  background-color: blue;
  color: white;
  position: sticky;
  top: 0;
}

.cell--body {
  background-color: lightgray;
}
</style>
