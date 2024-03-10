<script setup>
import { schema, items } from "@/repositories/items";
</script>

<template>
  <div class="table-container">
    <div class="grid">
      <template v-for="{ name } in Object.values(schema)">
        <div class="cell cell--header">{{ name }}</div>
      </template>
      <template v-for="item in items">
        <template v-for="key in Object.keys(schema)">
          <div class="cell cell--body" :class="{ 'cell--warn': item.warn }">
            {{ item[key] }}
          </div>
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
    /* 登録日 */
    minmax(70px, 2fr)
    /* 対応希望日 */
    minmax(70px, 2fr)
    /* 期限日 */
    minmax(70px, 2fr)
    /* カテゴリ */
    minmax(70px, 2fr)
    /* タイトル */
    minmax(150px, 3fr)
    /* メモ */
    minmax(150px, 3fr)
    /* 顧客名 */
    minmax(150px, 3fr)
    /* 本社担当 */
    minmax(150px, 3fr)
    /* 支店担当 */
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

.cell--warn {
  background-color: #99ff99;
}
</style>
