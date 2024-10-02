import { defineStore } from "pinia"
import { compile, computed, reactive } from "vue"

export const useProductStore = defineStore('product', () => {
    const products = reactive([])
    const productsForTable = reactive([])

    const tableData = computed(() => {
        return productsForTable
    })

    const getProductsFromServer = async() => {
        try {
            const resp = await fetch('https://fakestoreapi.com/products')
            if (resp.ok) {
              const json = await resp.json()
              console.log(json)

              json.forEach(item => {
                products.push(item)
              })

              console.log(products)
            } else {
              throw new Error(`Ошибка HTTP: ${resp.status}`)
            }
            
        }catch(e) {
            console.log('product.js || getProductsFromServer =>', e)
            
        }
    }

    const createDataForTable = (product) => {
        productsForTable.push(product)

        console.log(productsForTable)
    }

    return {
        products,
        tableData,
        getProductsFromServer,
        createDataForTable
    }
})