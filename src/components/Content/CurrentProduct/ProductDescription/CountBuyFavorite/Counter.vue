<template>
    <div class="cart-counter">
        <button @click="increment()">+</button>
        <p>{{count}}</p>
        <button @click="decrement()">-</button>
    </div>
</template>

<script lang="ts">
export default ({

    data() {
        return {
            count: 0,
        }
    },

    methods: {
        increment() {
            if (this.count < 20) {
                this.count++
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--
            }
        },
    }
})
</script>

<style scoped lang="scss">
    .cart-counter {
        display: flex;
        align-items: baseline;
        text-align: center;
        flex-direction: row;
        width: 145px;
        height: 44px;
        p {
            color: #333333;
            width: 44px;
            height: 44px;
        }
        button {
            width: 44px;
            height: 44px;
        }
        button:hover {
            background-color:rgba(33,33,33,0.1);
        }
    }
</style>