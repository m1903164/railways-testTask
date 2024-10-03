<script setup>
import {defineProps, defineEmits, onMounted, reactive, ref} from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { useProductStore } from "@/stores/product"

const product = useProductStore()

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
  }
})

const emit = defineEmits(['update:isDrawerOpen', 'applyFilters', 'resetFilters'])

const filterData = reactive({
  category: '',
  minPrice: 0,
  maxPrice: 0
})

const closeDrawer = () => {
  emit('update:isDrawerOpen', false)
}
const applyFilters = async () => {
  if (filterData.maxPrice < filterData.minPrice) {
    filterData.minPrice = 0
    filterData.maxPrice = 0

    ElMessage({
      type: 'error',
      message: 'Минимальная цена не может быть больше макимальной'
    })

    return
  }

  await product.getFiltersProductsFromServer(filterData)
  emit('applyFilters')
  closeDrawer()
}
const resetFilters = async () => {
  await product.getProductsFromServer()
  emit('resetFilters')
  closeDrawer()
}

onMounted(async () => {
  await product.getCategoriesFromServer()
})
</script>

<template>
  <el-drawer v-model="props.isDrawerOpen" :before-close="closeDrawer">
    <p>Выберите категорию</p>
    <el-select v-model="filterData.category">
      <el-option
        v-for="item in product.categoriesList"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>

    <p>Цена</p>
    <div>
      <el-input-number label="Минимальная" v-model="filterData.minPrice" />
      <el-input-number label="Максималбная" v-model="filterData.maxPrice" />
    </div>

    <div>
      <el-button @click="applyFilters(filterData)">Применить</el-button>
      <el-button @click="resetFilters">Сбросить</el-button>
    </div>
  </el-drawer>
</template>