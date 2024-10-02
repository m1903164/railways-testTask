<script setup>

import {onMounted} from "vue";

const getDataFromServer =  () => {
  fetch('https://fakestoreapi.com/carts')
      .then(res=>res.json())
      .then(json=>console.log(json))
}

onMounted(async () => {
  await getDataFromServer()
})

</script>

<template>
  <div class="home-container">
    <div class="home-header">
      <h3>Все категории</h3>
      <el-button>Фильтры</el-button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 20px;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
}
</style>