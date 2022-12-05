<template>
    <div class="all-box-counter-cart-favorite">
        <div class="counter-cart-favorite">
            <counterVue v-model:amountUpdated="cartAmount" />
            <div class="cart-and-favorite">
                <add-to-cart-button
                    :productName="productName"
                    :counterAmount="cartAmount"
                    @click=""
                />
                <add-to-favorites-button/>
            </div>
        </div>
        <a href="">Купить в 1 клик</a>
        <hr>
    </div>
</template>

<script lang="ts">
import counterVue from './Counter.vue'
export default ({
    components: { counterVue },
    props: {
        productName: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            cartAmount:0,
        }
    },
})
</script>

<style scoped lang="scss">
    .all-box-counter-cart-favorite {
        margin: 1rem 0rem;
        line-height: 3rem;
    }
    .counter-cart-favorite {
        gap: 0.5rem;
    }
    .cart-and-favorite {
        display: flex;
        align-items: center;
        width: 408px;
        height: 91px;
        gap: inherit;
        height: 4rem;
    }
</style>