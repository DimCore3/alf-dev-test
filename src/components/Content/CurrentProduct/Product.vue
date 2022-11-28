<template>
    <div>
        Product
        <ProductDescriptionVue :productData='productData'/>
    </div>
</template>

<script lang="ts">
import ProductDescriptionVue from './ProductDescription/ProductDescription.vue';

export default ({
    components: {ProductDescriptionVue},

    props: {
        productData: Object
    },
})
</script>

<style scoped>

</style>