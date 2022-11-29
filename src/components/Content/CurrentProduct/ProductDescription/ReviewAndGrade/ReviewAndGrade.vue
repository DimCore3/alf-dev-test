<template>
    <div class='review-grade-line'>
        <p> Отзывы </p>
        <div class="review-stars" v-for="rateStar of maxRating">
            {{rating}}
            <p>{{rating > maxRating}}</p>
            {{rateStar}}
            <img src={{}} alt="">
        </div>
        <p>{{commentsCountRate}} отзывов</p>
        <img src="/src/assets/corner.png" alt="">
    </div>
</template>

<script lang="ts">

export default ({
    props: {
        commentsCountRate: Number,
    },
    
    data() {
        return {
            rating: 0,
            maxRating: 5,
        }
    },
    
    beforeMount() {
        this.rating = this.checkRating();
    },

    methods: {
        checkRating() {
            let rate:number = this.rating;
            rate = (this.commentsCountRate ?? 0) / rate; 
            if (rate - Math.floor(rate) > 0.5) {
                rate = Math.round(rate)
            } else { 
                rate = Math.floor(rate) 
            }
            return rate;
        }
    }
})
</script>

<style scoped>
    .review-grade-line {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        line-height: 2rem;
    }
</style>