<template>
  <div>
    <img class="w-full" :src="$route.params.img_url" alt="hockey" />
    <p>{{ $route.params.id }}</p>
    <p>{{products.title}}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from 'axios'

export default {
  setup() {
    const route = useRoute();
    console.log(route.params);
    const products = ref([]);

    const product = computed(() => {
      return products.value.find((x) => x.id === parseInt(route.params.id));
    });

    return {
      products,
      product,
    };
  },
  mounted() {
    axios.get("/api/products/").then(response => {
      this.products.value = response.data;
      console.log(response.data)
    })
  }
};
</script>
