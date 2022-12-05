<template>
    <div class="product-description">
        <h1>{{productData.productName}}</h1>
        <div class="text-regular-small article-number">Арт.{{productData.articleCode}}</div>
        <ReviewAndGradeVue :rating='productData.rating'/>
        <PriceAndDiscountsVue :oldPrice='productData.price.oldPrice' :discounts='productData.price.discounts' />
        <div class="current-product-description">
            <ChooseSizeVue :sizeList="productData.sizeList"/>
            <BuyAddToFavorite :productName="productData.productName"/>
        </div>
        <div class="description-links">
            <div>
                <img src="/src/assets/Closes.svg">
                <a href="">Описание товара</a>
            </div>    
            <div>
                <img src="/src/assets/clock.svg">
                <a href="">Доставка и возврат</a>
            </div>    
            <div>
                <img src="/src/assets/pay.svg">
                <a href="">Способы оплаты</a>
            </div>
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
            required: true,
        }
    },

    data() {
        return {
            
        }
    },
})
</script>

<style scoped lang="scss">
.description-links {
    display: flex;
    flex-direction: column;
    line-height: 2rem;

    div {
        display: flex;
        align-items: center;
    }
}

h1 {
    color: #333333;
    line-height: 20px;
    margin-bottom: 0.5rem;
}
.text-regular-small {
    color: #828282;
}
.product-description {
    margin: 30px;
    line-height: 4rem;
}
.article-number {
    margin-bottom: 1rem;
}
</style>