<template>
    <div class="full-product-info">
        <ProductImagePanelVue :productData='productData'/>
        <ProductDescriptionVue :productData='productData'/>
    </div>
</template>

<script lang="ts">
import ProductImagePanelVue from './ProductImagePanel/ProductImagePanel.vue';
import ProductDescriptionVue from './ProductDescription/ProductDescription.vue';

export default ({
    components: {
        ProductImagePanelVue,
        ProductDescriptionVue
    },

    props: {
        productData:{
            type:Object,
            required: true,
        }
    },

    mounted() {
        console.log(this.productData)
    }

})
</script>

<style scoped>
 .full-product-info {
    margin-top: 1rem;
 }
</style>