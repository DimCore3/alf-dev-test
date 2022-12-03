<template>
    <div  
        class="full-product-img"  
        :style="{ 'background-image' : 'url(\''+ productData?.allImgSrc[imgIndexActive] + '\')'}"
    >
        <div class="img-control-panel">
            <MiniatureImageVue 
                v-for='(picture,index) of productData?.allImgSrc' 
                :picture='picture' 
                :index='index' 
                :key="'miniImg_' + index" 
                :isActive="index === imgIndexActive"
                v-model:UpdateIndex="imgIndexActive"
            />
        </div>
    </div>
</template>

<script lang="ts">
import MiniatureImageVue from './MiniatureImage/MiniatureImage.vue';
export default({
    components: {
        MiniatureImageVue
    },
    
    props: {
        productData: {
            type: Object,
        }
    },

    data() {
        return {
            imgIndexActive: 0,
        }
    },

})
</script>

<style scoped>
    .img-control-panel {
        padding: 21px;
        gap: 7px;
        display: flex;
        flex-direction: column;
    }
    .full-product-img {
        background-clip: border-box;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>