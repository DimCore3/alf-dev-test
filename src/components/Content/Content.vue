<template>
    <div>
        Content
        <Product :productData='productData'/>
    </div>
</template>

<script lang="ts">
import Product from './CurrentProduct/Product.vue'

export default({
    components: {
        Product,
    },

    props: {
        productData: Object
    },

})
</script>

<style scoped>

</style>