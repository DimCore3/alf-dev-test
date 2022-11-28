<template>
    <div>
        Content
        <Product/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Product from './CurrentProduct/Product.vue'

export default defineComponent({
    components: {
        Product,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>