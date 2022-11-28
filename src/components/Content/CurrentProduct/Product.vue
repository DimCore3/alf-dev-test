<template>
    <div>
        Product
        <ProductDescriptionVue/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductDescriptionVue from './ProductDescription/ProductDescription.vue';

export default defineComponent({
    components: {ProductDescriptionVue},
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>