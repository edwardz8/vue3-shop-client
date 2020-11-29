<template>
  <div class="container flex flex-col m-auto">
    <h1 class="text-4xl font-medium">Shopping Cart</h1>
    <div v-if="cart.length >= 1" class="flex w-full flex-col m-auto">
      <div class="flex w-full flex-col md:flex-row">
        <div class="flex md:w-3/5 mt-4 w-full">
          <table class="table-auto w-11/12 m-auto">
            <thead>
              <tr class="h-12 border-b border-solid border-gray-400">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <ProductCart :product="product" v-for="(product, index) in cart" :key="index" />
            </tbody>
          </table>
        </div>

        <div class="sm:w-7/12 md:w-2/5 w-full m-auto mt-4">
          <div>
            <table class="mt-4 mb-4">
              <tr class="text-center text-2xl">
                <td class="w-56">Subtotal</td>
                <td class="w-56">$ {{subTotal}}</td>
              </tr>
              <tr class="text-center text-2xl">
                <td>Tax</td>
                <td>$ {{tax}}</td>
              </tr>
              <tr class="h-20 text-center text-3xl">
                <td><strong>Total</strong></td>
                <td><strong>$ {{Number.parseFloat(grandTotal).toFixed(2)}}</strong></td>
              </tr>
            </table>
            <div class="w-5/6 m-auto mt-4 mb-4">
            <a href="#">
                <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"><span class="ml-2 mt-5px">Checkout</span></button>
              </a> 
            </div> 
          </div>
        </div>
      </div>
    </div>

    <div v-if="cart.length <= 0" class="flex w-full mt-20">
        <h1 class="m-auto text-5xl">Your cart is empty.</h1>
    </div>
  </div>
</template>

<script>
import {ref, computed } from 'vue'
import store from '@/store/index.js'
import ProductCart from '@/components/ProductCart.vue'

export default {
  components: {
    ProductCart
  },
  setup() {
    const cart = computed(() => {
      return store.state.cart
    })

    const subTotal = computed(() => {
      return store.state.subTotal
    })

    const tax = computed(() => {
            return store.state.tax
      })

    const grandTotal = computed(() => {
            return store.state.grandTotal
      })

    return {
      cart,
      subTotal,
      tax,
      grandTotal
    }
  },

  mounted() {
    store.commit('calcSubTotal')
    store.commit('calcGrandTotal')
  }

}

</script>
