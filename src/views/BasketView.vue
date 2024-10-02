<script setup>
import { useProductStore } from '@/stores/product'

const product = useProductStore()

const incrementQuantity = (id) => {
  const product = productsForTable.find(product => product.id === id)
  product.quantity++
}

const decrementQuantity = (id) => {
  const product = productsForTable.find(product => product.id === id)
  if (product.quantity > 0) {
    product.quantity--
  }
}
</script>

<template>
  <div class="basketPage_container">
    <h3 class="basketPage_title">Товары в корзине</h3>
    <el-table
      :data="product.tableData"
      empty-text="Корзина пуста"
      border 
    >
      <el-table-column label="№" prop="id" width="50px"/>
      <el-table-column label="Товар">
        <template #default="{ row }">
          <img :src="row.image" style="width: 50px; margin-right: 10px;">
          {{ row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Количество">
        <template #default="{ row }">
          <el-button type="primary" size="mini" @click="decrementQuantity(row.id)">-</el-button>
          {{ row.quantity }}
          <el-button type="primary" size="mini" @click="incrementQuantity(row.id)">+</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Цена за единицу" prop="price"/>
      <el-table-column label="Общая цена" prop="price"/>
    </el-table>
  </div>
</template>

<style scoped>
.basketPage_title {
  margin-left: 20px;
}
</style>