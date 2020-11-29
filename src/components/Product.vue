<template>
  <div class="rounded overflow-hidden shadow-lg card">
    <img class="w-full" :src="product.img_url" alt="hockey" />
    <div class="px-2 py-4 mt-4">
      <div class="font-bold text-blue-900 text-xl">{{ product.title }}</div>
      <p class="text-gray-700 font-bold text-lg text-base mb-4">${{ product.price }}</p>
      <div>
        <button @click="addToCart(product)" class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" :class="isAdded ? 'bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' : 'bg-blue-800 text-white font-bold py-2 px-4 rounded'">
          <span v-if="!isAdded">Add</span>
          <span v-if="isAdded">Remove</span>
        </button>

        <!-- <router-link :to="{ name: 'Product', params: { id: product.id } }"> -->
        <router-link :to="`/product/${product.id}`" class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"> View </router-link>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hockey</span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import store from "@/store/index.js";
import axios from "axios";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isAdded = ref(false);
    const cart = computed(() => {
      return store.state.cart;
    });

    function addToCart(product) {
      isAdded.value = !isAdded.value;
      if (isAdded.value) {
        store.commit("addToCart", product);
        store.commit("storeProduct");
      } else {
        store.commit("removeProduct", product);
        store.commit("storeProduct");
      }
    }

    /* function viewCurrentProduct(product) {
      store.commit("setProduct", product.id);
    } */

    function checkAdded() {
      var product = props.product.id;
      var check = cart.value.some((el) => {
        return el.id === product;
      });
      if (check) {
        isAdded.value = true;
      }
    }

    return {
      cart,
      addToCart,
      isAdded,
      checkAdded,
    };
  },
  mounted() {
    this.checkAdded();
  },
  /* methods: {
    viewProduct(product) {
      store.commit("setProduct", product)
    },
    goToDetail() {
      this.$router.push({ name: "Product", params: { id: this.product.id } });
    },
  }, */
};
</script>

<style scoped></style>
