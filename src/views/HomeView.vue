<script setup>
import { ref } from 'vue';
import CardItem from '../components/CardItem.vue';
import SideBarFilter from '../components/SideBarFilter.vue'

const isDrawerOpen = ref(false)

const openDrawer = () => {
  isDrawerOpen.value = true
};

const applyFilters = () => {
  // Логика применения фильтров
  console.log('Применены фильтры')
  isDrawerOpen.value = false
};

const resetFilters = () => {
  // Логика сброса фильтров
  console.log('Фильтры сброшены')
  isDrawerOpen.value = false
};
</script>

<template>
  <div class="home-container">
    <div class="home-header">
      <h3>Все категории</h3>
      <el-button @click="openDrawer">Фильтры</el-button>
    </div>
    <div class="card-list-container">
      <CardItem />
    </div>
  </div>
  <SideBarFilter
      v-model:isDrawerOpen="isDrawerOpen"
      @applyFilters="applyFilters"
      @resetFilters="resetFilters"
  />
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