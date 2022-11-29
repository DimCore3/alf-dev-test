<template>
    <div class="product-description">
        <h1>{{productData.productName}}</h1>
        <div class="text-regular-small article-number">Арт.{{productData.articleCode}}</div>
        <ReviewAndGradeVue :commentsCountRate='productData.commentsCountRate'/>
        <PriceAndDiscountsVue/>
        <div class="current-product-description">
            <ChooseSizeVue/>
            <BuyAddToFavorite/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReviewAndGradeVue from './ReviewAndGrade/ReviewAndGrade.vue';
import PriceAndDiscountsVue from './PriceAndDiscounts/PriceAndDiscounts.vue';
import ChooseSizeVue from './ChooseSize/ChooseSize.vue';
import BuyAddToFavorite from './CountBuyFavorite/BuyAddToFavorite.vue';

export default defineComponent({
    components: {
        ReviewAndGradeVue,
        PriceAndDiscountsVue,
        ChooseSizeVue,
        BuyAddToFavorite,
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
.product-description {
    margin: 2rem;
    line-height: 3rem;
    padding: 0.5rem;
}
.article-number {
    margin-bottom: 1rem;
}
</style>