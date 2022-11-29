<template>
    <div>
        PriceAndDiscounts
    </div>
</template>

<script lang="ts">
export default({
    props: {
        discounts: Array,
        oldPrice: Number,
    },

    data() {
        let newPrice:number = 0;
        return {
            newPrice:Number
        }
    },

    methods:{
        getCoastWithDiscounts (){
            try {
                this.newPrice = this.oldPrice;
                for (let amount of this.oldPrice) {
                    this.newPrice = Numbrer(this.newPrice) * (amount / 100)
                }
            } catch (error) {
                alert('Error: ', error[0])
                
            },
        },
    },
})
</script>

<style scoped>

</style>