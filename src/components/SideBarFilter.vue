<script setup>
import {defineProps, defineEmits, onMounted, reactive, ref} from 'vue'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(['update:isDrawerOpen', 'applyFilters', 'resetFilters'])

const categories = ref([])

const closeDrawer = () => {
  emit('update:isDrawerOpen', false);
}
const applyFilters = () => {
  // Применение фильтров
  emit('applyFilters')
  closeDrawer()
}
const resetFilters = () => {
  // Сброс фильтров
  emit('resetFilters')
  closeDrawer()
}

const getCategoriesFromServer = async () => {
  try {
    const resp = await fetch('https://fakestoreapi.com/products/categories')
    if (resp.ok) {
      const json = await resp.json()

      json.forEach(item => {
        categories.value.push(item)
      })

      console.log(categories.value)

    } else {
      throw new Error(`Ошибка HTTP: ${resp.status}`)
    }
  }catch (e) {
    console.log('getCategoriesFromServer || SideBarView =>', e)
  }
}

onMounted(async () => {
  await getCategoriesFromServer()
})
</script>

<template>
  <el-drawer v-model="props.isDrawerOpen" :before-close="closeDrawer">
    <p>Выберите категорию</p>
    <el-select>
      <el-option
        v-for="item in categories"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>

    <p>Цена</p>
    <div>
      <el-input-number label="Минимальная" />
      <el-input-number label="Максималбная" />
    </div>

    <div>
      <el-button @click="applyFilters">Применить</el-button>
      <el-button @click="resetFilters">Сбросить</el-button>
    </div>
  </el-drawer>
</template>