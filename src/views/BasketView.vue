<script setup>
import { computed } from "vue"
import { ElMessage, ElMessageBox } from 'element-plus'

import { useProductStore } from '@/stores/product'

const product = useProductStore()

const totalAmount = computed(() => {
  return product.tableData.reduce((total, row) => total + row.amount, 0)
})

const addDeleteBasketItem = (row, operation) => {
  product.createDataForTable(row, operation)
}

const applyOffer = () => {
  product.tableData.splice(0, product.tableData.length)

  ElMessage({
    type: 'success',
    message: 'Ваш заказ успешно оформлен'
  })
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
      <el-table-column label="Название" prop="title" width="200px"/>
      <el-table-column label="Количество" width="200px">
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
      <el-table-column label="Цена за единицу" prop="price" width="200px"/>
      <el-table-column label="Общая цена" prop="amount" width="200px"/>
    </el-table>

    <div class="total-amount">
      <b>Общая сумма: {{ totalAmount }} $</b>
      <el-button @click="applyOffer">
        Оформить заказ
      </el-button>
    </div>

  </div>
</template>

<style scoped>
.basketPage_title {
  margin-left: 20px;
}

.total-amount {
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>