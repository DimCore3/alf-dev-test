<template>
    <a class="img-hover-info" :href="link">
        <div 
            class="take-copy img-hover-icons"
            @click="copyUrl" 
        >
            <img src="/src/assets/copy.svg" alt="">
        </div>
        <div>
            <img class="img-hover-icons-bag" src="/src/assets/bag.svg" alt="">
            <p>Узнай что на мне</p>
        </div>
        <div class="style-likes-amount">
            <img class="img-hover-icons" src="/src/assets/like.png" alt="">
            <p>{{likesNum}}</p>
        </div>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
    props: {
        likesNum: {
            type:Number,
            required: true,
        },
        link: {
            type: String,
            required: true,
        }
    },
    methods: {
        copyUrl() {
            alert('click')
        }
    }
})
</script>

<style scoped lang="scss">
.img-hover-info {
    display: none;
}

.img-hover-icons {
    width: 17px;
    height: 17px;
}

.img-hover-icons-bag {
    width: 45px;
    height: 45px;
}

.large-img-prod-style:hover,
.small-prod-img:hover {
    .img-hover-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        flex-direction: column;
        background-color: rgba($color: #000000, $alpha: 0.4);
        height: 100%;

        .take-copy {
            align-self: end;
            z-index: 30;
        }

        .take-copy,
        .style-likes-amount {
            margin: 1rem;
        }

        p {
            color: white;
        }
    }
}
</style>