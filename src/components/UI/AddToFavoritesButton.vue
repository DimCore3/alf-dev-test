<template>
    <button @click="clickToButton()" class="add-to-favorite-button">
        <img :src="img" alt="">
    </button>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue'
import dislikeImg from '../../assets/dislike.png'
import likeImg from '../../assets/like.png'

export default defineComponent({
    name:'add-to-favorites-button',
    data() {
        return {
            isLiked: false,
            img:dislikeImg,
        }
    },

    methods: {
        clickToButton() {
            this.isLiked = !this.isLiked;
            this.img = this.isLiked ? likeImg : dislikeImg ;
        },
    }
})

</script>

<style lang="scss" scoped>
    .add-to-favorite-button {
        width: 44px;
        height: 44px;
        background: #333333;
        img {
            width: 15px;
            height: 15px;
        }
    }
    .add-to-favorite-button:hover {
        background-color:rgba(33,33,33,0.8);
    }

</style>