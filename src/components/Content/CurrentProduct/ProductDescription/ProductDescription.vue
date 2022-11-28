<template>PriceAndDiscounts
    <h1>{{productData.productName}}</h1>
    <div class="text-regular-small">Арт.{{productData.articleCode}}</div>
    <div class="current-product-description">
        <ChooseSizeVue/>
        <BuyAddToFavorite/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BuyAddToFavorite from './CountBuyFavorite/BuyAddToFavorite.vue'
import ChooseSizeVue from './ChooseSize/ChooseSize.vue'

export default defineComponent({
    components: {
        BuyAddToFavorite,
        ChooseSizeVue,
    },

    props: {
        productData: {
            type: Object,
            default: {
                productName: "Title undefined",
            }
        }
    },

    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.productData)
    }
})
</script>

<style scoped>
h1 {
    color: #333333;
}
.text-regular-small {
    color: #828282;
}
</style>