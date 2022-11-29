<template>
    <div class="counter-cart-favorite">
        <counterVue/>
        <div class="cart-and-favorite">
            <add-to-cart-button/>
            <add-to-favorites-button/>
        </div>
    </div>

</template>

<script lang="ts">
import counterVue from './Counter.vue'

export default ({
    components: { counterVue },
})
</script>

<style scoped lang="scss">
    .counter-cart-favorite {
        height: 3rem;
        gap: 0.5rem;
        margin: 1rem 0rem;
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