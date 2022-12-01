<template>
    <div class='review-grade-line'>
        <p> Отзывы </p>
        <div class="review-stars">
            <div class="star-vote" v-for="rateStar of maxRating">
                <img v-if="rating.productRate >= rateStar" src="/src/assets/filledStar.png">
                <img v-else src="/src/assets/unfiiledStar.png">
            </div>
            <p>
                {{rating?.commentsCount}} отзывов
            </p>
            <img 
                class="corner-button" 
                src="/src/assets/corner.png"
                @click="modalInfoBox"    
            >
        </div>
    </div>
</template>

<script lang="ts">

export default ({
    props: {
        rating:{
            type:Object,
            default: {
                productRate: {
                    type: Number,
                    default: 1,
                },
                commentsCount: {
                    type: Number,
                    default:0,
                }
            }
        } 
    },
    data() {
        return {
            rate: 0,
            maxRating: 5,
        }
    },
    
    beforeMount() {
        console.log(this.rating.commentsCount)
    },

    methods: {
        modalInfoBox() {
            alert('Тут будет модальное окно или страница')
        }
    }
})
</script>

<style scoped lang="scss">
    .review-grade-line {
        display: flex;
        line-height: 1rem;
        flex-wrap: nowrap;
        align-items: baseline;
        gap: 0.5rem;
        margin-bottom: 1.5rem;

        .review-stars {
            display: flex;
            flex-direction: row;
            height: 0.7rem;
            align-items: center;
            gap: 0.2rem;
        }
    }
</style>