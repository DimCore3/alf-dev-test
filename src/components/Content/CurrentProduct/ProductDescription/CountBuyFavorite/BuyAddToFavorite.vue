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

@media screen and (min-width: 400px) {
    .counter-cart-favorite {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
}
    .cart-and-favorite {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 408px;
        height: 91px;
        left: 20px;
        top: 112px;
        gap: 4px;
    }
</style>