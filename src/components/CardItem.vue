<script setup>
import { onMounted } from "vue"

import { useProductStore } from "@/stores/product"

const product = useProductStore()

const operationWithProduct = (item, operation) => {
  product.createDataForTable(item, operation)
}

onMounted(async() => {
  await product.getProductsFromServer()
})
</script>

<template>
  <div class="card-list-container">
    <div class="card-grid">
      <div class="card-item" v-for="product in product.products" :key="product.id">
        <el-card class="box-card">
          <img class="box-card_image" :src="product.image">
          <p class="box-card_title">{{ product.title }}</p>
          <p>{{ product.price }}$</p>
          <div>
            <el-button @click="operationWithProduct(product, 'increment')">
              +
            </el-button>
            <el-button @click="operationWithProduct(product, 'decrement')">
              -
            </el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-list-container {
  display: flex;
  justify-content: center;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.card-item {
  flex-basis: 25%;
}

.box-card {
  min-height: 200px;
}

.box-card_image {
  width: 100px;
  height: 100px;
}

@media (max-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>