<template>
<ul class="flex justify-between">
  <li class="mr-3">
    <router-link :to="{ name: 'Home' }" class="inline-block border border-blue-900 rounded py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white hover:border-blue-800" href="#">Home</router-link>
  </li>
   <li class="mr-3">
    <router-link :to="{ name: 'Cart' }" class="inline-block border border-blue-900 rounded py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white hover:border-blue-800" href="#">Cart
      <span class="text-lg font-medium">{{cart.length}}</span>
    </router-link>
  </li>
</ul>
</template>

<script>
import { ref, computed } from 'vue'
import store from '@/store/index.js'

export default {
  setup() {
    const cart = computed(() => {
      return store.state.cart
    })
  return {
    cart
  }
  },

  mounted() {
    store.commit('getLocalStorage')
  }
}

</script>

<style scoped>
    ul {
        padding: 2rem;
    }

</style>