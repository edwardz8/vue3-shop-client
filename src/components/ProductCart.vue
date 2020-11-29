<template>
    <tr class="h-24 md:h24 sm:24 border-b border-solid border-gray-400 text-center font-medium">
        <td class="flex">
            <div class="m-auto">
                <img :src="product.img_url" class="m-auto mt-2 mb-2 rounded w-32" width="100" height="100" alt="product" >
            </div>
            <div class="m-auto">
                <p>{{ product.title }}</p>
            </div>
        </td>
        <td>{{product.price}}</td>
        <td>
            <input @input="total()" class="border rounded text-center border-gray-400" v-model="product.qty" type="number" max="10" min="1" />
        </td>
        <td>$ {{subTotal}}</td>
        <td><span @click="removeProduct(product)">X</span></td>
    </tr>
</template>

<script>
import {ref, computed} from 'vue'
import store from '@/store/index.js'

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const subTotal = computed(() => {
            return props.product.price * props.product.qty
        })

        function removeProduct(product) {
            store.commit('removeProduct', product)
            total()
        }

        function total() {
            store.commit('calcSubTotal')
            store.commit('calcGrandTotal')
            store.commit('storeProduct')
        }

        return { subTotal, removeProduct, total }
    }
}
</script>

