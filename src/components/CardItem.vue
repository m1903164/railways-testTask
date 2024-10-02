<script setup>
import { onMounted } from "vue"

import { useProductStore } from "@/stores/product"

const product = useProductStore()

const showProductDetails = (item) => {
  product.createDataForTable(item)
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
          <p class="box-card_title">{{ product.title }}</p>
          <p>{{ product.price }}$</p>
          <el-button type="success" plain @click="showProductDetails(product)">В корзину</el-button>
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