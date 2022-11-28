<template>
    <div class="current-product-description">
        Product Description
        <buyAddToFavorite/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import buyAddToFavorite from './DescriptionComponents/BuyAddToFavorite.vue'

export default defineComponent({
    components: {
        buyAddToFavorite,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>