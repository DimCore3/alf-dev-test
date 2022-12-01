<template>
    <Product :productData='productData'/>
    <AllStyleItemsVue :productData='productData'/>
</template>

<script lang="ts">
import Product from './CurrentProduct/Product.vue'
import AllStyleItemsVue from './AllStyleItems/AllStyleItems.vue';

export default({
    components: {
        Product,
        AllStyleItemsVue
    },

    props: {
        productData:{
            type:Object,
            required: true,
        }
    },

})
</script>

<style scoped>
</style>