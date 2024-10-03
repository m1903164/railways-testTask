import { defineStore } from "pinia"
import { computed, reactive } from "vue"

export const useProductStore = defineStore('product', () => {
    const products = reactive([])
    const listOfProducts = reactive([])

    const tableData = computed(() => {
        return listOfProducts
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

    const createDataForTable = (product, operation) => {
        const existingProduct = listOfProducts.find((existingProduct) => existingProduct.id === product.id)

        if (existingProduct) {
            switch (operation) {
                case 'increment':
                    existingProduct.count++
                    existingProduct.amount += product.price
                    break
                case 'decrement':
                    existingProduct.count--
                    existingProduct.amount -= product.price

                    if (existingProduct.count <= 0) {
                        const index = listOfProducts.indexOf(existingProduct)
                        listOfProducts.splice(index, 1)
                    }
                    break
            }
        } else {
            const productForTable = {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                count: 1,
                amount: product.price,
            }

            listOfProducts.push(productForTable)
        }

        console.log(listOfProducts)
    }

    return {
        products,
        tableData,

        getProductsFromServer,
        createDataForTable,
    }
})