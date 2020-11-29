<template>
    <h1 class="text-gray-700 text-4xl font-medium">Top Refurbished Products</h1>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-6">
        <Product :product="product" v-for="(product, index) in products" :key="index" />
    </div>
</template>

<script>
import Product from './Product'
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'ShoppingGrid',
  components: {
    Product
  },
  setup() {
    const products = ref([])

    function getProducts() {
      axios.get('/api/products/')
      .then(response => {
        products.value = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }

    return {
      products,
      getProducts,
    }
  },

  mounted() {
    this.getProducts()
  }
}
</script>