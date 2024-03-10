<script setup>
import { schema, items } from "@/repositories/items";
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr class="row row--header">
          <template v-for="[key, { name }] in Object.entries(schema)">
            <th class="cell cell--header" :class="`cell-${key}`">{{ name }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in items">
          <tr class="row row--body">
            <template v-for="key in Object.keys(schema)">
              <td class="cell cell--body" :class="{ 'cell--warn': item.warn }">
                {{ item[key] }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  font-size: 0.7em;
  height: 350px;
  overflow: auto;
  position: relative;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.row--header {
  position: sticky;
  top: 0;
}

.cell {
  padding: 5px;
}

.cell--header {
  background-color: blue;
  color: white;
}

.cell--body {
  background-color: lightgray;
}

.cell--warn {
  background-color: #99ff99;
}

.cell-status,
.cell-createDate,
.cell-responseDate,
.cell-deadlineDate,
.cell-category {
  min-width: 70px;
}
.cell-subject,
.cell-memo,
.cell-customerName,
.cell-picName,
.cell-branchPicName {
  min-width: 150px;
}
</style>
