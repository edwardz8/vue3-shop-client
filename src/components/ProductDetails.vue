<template>
    <div class="rounded overflow-hidden shadow-lg card" >
        <!-- <img class="w-full" :src='$route.params.img_url' alt="hockey"> -->
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import store from '@/store/index.js'
import { mapGetters, mapActions } from 'vuex'

export default {
    props: {
        product: {
            type: Object,
            required: false
        }
    },
    setup() {
        const product = ({})
    },
    computed: {
        ...mapGetters({ product: "getProduct" })
    },
    methods: {
        ...mapActions('product', ['product'])
    },
    mounted() {
       // this.productDetails(this.$route.params.id)
       // this.getProduct()
    }
}
</script>

<style scoped>

</style>