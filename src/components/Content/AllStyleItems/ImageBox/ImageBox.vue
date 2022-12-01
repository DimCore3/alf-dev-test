<template>
        <div class="image-style-box"> 
            <div class="img-hover-info">
                <div class="take-copy img-hover-icons">
                    <img src="/src/assets/copy.svg" alt="">
                </div>
                <div>
                    <img class="img-hover-icons-bag" src="/src/assets/bag.svg" alt="">
                    <p>Узнай что на мне</p>
                </div>
                <div>
                    <img class="img-hover-icons" src="/src/assets/like.png" alt="">
                    <p>200</p>
                </div>
            </div>
            <img class="contain-img-style" src="/src/assets/13986.png" alt="">
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped lang="scss">
.image-style-box {
    width: 50%;
    margin: 0.5rem;
    .contain-img-style {
        width: 100%;
        height: auto;
    }
    .img-hover-info {
        display: none;
    } 

    .img-hover-icons {
        width: 17px;
        height: 17px;
    }

    .img-hover-icons-bag {
        width:  45px;
        height:  45px;
    }
}
 .image-style-box:hover {
    .img-hover-info {
        position:absolute;
        display:flex;
        align-items: center;
        justify-content:space-between;
        text-align: center;
        flex-direction: column;
        .take-copy {
            justify-content: flex-end;
            margin: 1rem;
        }

        background-color: rgba($color: #000000, $alpha: 0.4);
        color: white;
    }
 }
</style>