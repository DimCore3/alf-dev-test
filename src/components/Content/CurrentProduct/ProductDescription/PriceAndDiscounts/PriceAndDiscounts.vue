<template>
    <div>
        <div class="all-prices">
            <p class="new-price">{{ newPrice }} ₽</p>
            <p class="old-price" v-if="newPrice != oldPrice">{{ oldPrice }} ₽</p>
            <img class="corner-button" src="/src/assets/corner.png" @click="modalInfoBox">
        </div>
        <div v-if='getTotalDiscount(discounts) != 0' class="show-all-discounts">
            <p class='show-discount' v-for="discount of discounts">акция -{{ discount }}%</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({

    props: {
        discounts: {
            type: Object as PropType<number[]>,
            required: true,
        },
        oldPrice: {
            type: Number,
            required: true,
        },
    },

    setup(props) {
        props.discounts;
        props.oldPrice;
    },

    data() {
        return {
            newPrice: 0,
        }
    },

    mounted() {
        this.getCoastWithDiscounts()
    },

    methods: {
        getCoastWithDiscounts() {
            try {
                let totalDiscount = this.getTotalDiscount(this.discounts);
                let discountAmountSum;
                if (totalDiscount != 0) {
                    discountAmountSum = Math.round(totalDiscount / 100 * this.oldPrice)
                    this.newPrice = this.oldPrice - discountAmountSum;

                } else {
                    this.newPrice = this.oldPrice
                }

            } catch (error) {
                alert('Error: ' + error)
            };
        },

        getTotalDiscount(arr: number[]) {
            let TotalDiscountSum = arr.reduce((a, b) => a + b, 0);
            if (arr.length > 0 && TotalDiscountSum <= 100) {
                return TotalDiscountSum
            };
            return 0;
        },

        modalInfoBox() {
            alert('Тут будет модальное окно или страница')
        },
    },
})
</script>

<style scoped>
.new-price,
.old-price {
    margin: 1rem 0.5rem 1rem 0rem;
}

.new-price {
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    text-transform: uppercase;
    color: #333333;
}

.old-price {
    color: #828282;
    text-decoration-line: line-through;
}

.show-all-discounts,
.all-prices {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.show-all-discounts {
    margin-bottom: 2rem;
}

.show-discount {
    margin-right: 0.5rem;
    border: 2px #333333 solid;
    padding: 0.15rem 0.5rem;
}


</style>