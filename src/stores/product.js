import { defineStore } from "pinia"
import { computed, reactive } from "vue"

export const useProductStore = defineStore('product', () => {
    const products = reactive([])

    const listOfProducts = reactive([])

    const categoriesFromServer = reactive([])

    const tableData = computed(() => {
        return listOfProducts
    })

    const categoriesList = computed(() => {
        return categoriesFromServer
    })

    const getProductsFromServer = async() => {
        try {
            products.splice(0, products.length)

            const resp = await fetch('https://fakestoreapi.com/products')
            if (resp.ok) {
              const json = await resp.json()

              json.forEach(item => {
                products.push(item)
              })

              console.log('simple =>',products)
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

    const getCategoriesFromServer = async () => {
        try {
            const resp = await fetch('https://fakestoreapi.com/products/categories')
            if (resp.ok) {
                const json = await resp.json()

                json.forEach(item => {
                    categoriesFromServer.push(item)
                })

                console.log(categoriesFromServer)

            } else {
                throw new Error(`Ошибка HTTP: ${resp.status}`)
            }
        }catch (e) {
            console.log('product.js || getCategoriesFromServer =>', e)
        }
    }

    const getFiltersProductsFromServer = async (filterData) => {
        console.log(filterData)

        try {
            products.splice(0, products.length)

            const resp = await fetch(`https://fakestoreapi.com/products/category/${filterData.category}`)
            if (resp.ok) {
                const json = await resp.json();

                const filteredProducts = (filterData.maxPrice > filterData.minPrice)
                    ? json.filter(item => item.price >= filterData.minPrice && item.price <= filterData.maxPrice)
                    : json

                filteredProducts.forEach(item => {
                    products.push(item);
                });

                console.log('filter =>', products)
            }
        } catch (e) {
            console.log('product.js || getFiltersProductsFromServer =>', e)
        }
    }

    return {
        products,
        tableData,

        getProductsFromServer,
        createDataForTable,

        categoriesList,

        getCategoriesFromServer,
        getFiltersProductsFromServer
    }
})