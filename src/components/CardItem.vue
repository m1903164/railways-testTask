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
  <el-card 
    class='box-card'
    v-for="product in product.products" :key="product.id"
  >
    <p class="box-card_title">
      {{ product.title }}
    </p>
    <el-button 
      type="success" 
      plain
      @click="showProductDetails(product)"
    >
      В корзину
    </el-button>
  </el-card>
</template>


<style scoped>
.box-card {
  margin-bottom: 10px;
}

.box-card_title {
  font-size: 12px;
}
</style>
