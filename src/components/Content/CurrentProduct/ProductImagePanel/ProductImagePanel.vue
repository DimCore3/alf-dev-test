<template>
    <div class="full-product-img">
        <div class="img-control-panel">
            <MiniatureImageVue v-for='picture of productData?.allImgSrc' :picture='picture'/>
        </div>
        <img src="" alt="">
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

</style>