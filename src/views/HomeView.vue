<script setup>
import CardItem from '../components/CardItem.vue'

</script>

<template>
  <div class="home-container">
    <div class="home-header">
      <h3>Все категории</h3>
      <el-button>Фильтры</el-button>
    </div>
    <div class="card-list-container">
      <CardItem/>
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
  margin-bottom: 20px;
}

.card-list-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>