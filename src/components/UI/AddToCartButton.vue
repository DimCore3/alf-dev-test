<template>
    <div>
        <my-notification 
            :text="'Товар `' + productName + '` в количестве ' + counterAmount + ' единиц добавлен в корзину'" 
            :isShow="isShowNotif"
        />
        <button @click="click" class="ui-pay-button">
            <p>Добавить в корзину</p>
        </button>
    </div>
</template>

<script lang="ts">
export default ({
    name: 'add-to-cart-button',

    props: {
        counterAmount: {
            type: Number,
            required: true,
            default: 0,
        },
        productName: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            isShowNotif: false,
        };
    },
    methods: {
        click() {
            this.isShowNotif = true;
            setTimeout(()=> {
                this.isShowNotif = false;
            }, 2000)
        }
    }
})
</script>

<style lang="scss" scoped>
    .ui-pay-button {
        background-color: #333333;
        border: 1px solid #333333;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 26px;
        gap: 10px;
        width: 203px;
        height: 44px;
        p {
            color: #FFFFFF;
        }
    }
    .ui-pay-button:hover {
        background-color:rgba(33,33,33,0.8);
    }
</style>