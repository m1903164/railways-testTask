<script setup>
import { useProductStore } from '@/stores/product'

const product = useProductStore()

const addDeleteBasketItem = (row, operation) => {
  product.createDataForTable(row, operation)
}

</script>

<template>
  <div class="basketPage_container">
    <h3 class="basketPage_title">Товары в корзине</h3>

    <el-table
      :data="product.tableData"
      empty-text="В корзине ничего нет"
      border
    >
      <el-table-column prop="id" label="№" width="50px"/>
      <el-table-column label="Фото" width="100px">
        <template #default="{ row }">
          <img :src="row.image" style="width: 50px; margin-right: 10px;">
        </template>
      </el-table-column>
      <el-table-column label="Название" prop="title"/>
      <el-table-column>
        <template #default="{ row }">
          <el-button @click="addDeleteBasketItem(row, 'increment')">
            +
          </el-button>
          {{ row.count }}
          <el-button @click="addDeleteBasketItem(row, 'decrement')">
            -
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="Цена за единицу" prop="price"/>
      <el-table-column label="Общая цена" prop="amount"/>
    </el-table>

  </div>
</template>

<style scoped>
.basketPage_title {
  margin-left: 20px;
}
</style>