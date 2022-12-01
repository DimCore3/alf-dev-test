<template>
    <div class="all-content-boxes">
        <a class="show-all-styles" href="">Посмотреть все стили</a>
        <div class="all-img-style">
            <ImageBoxVue/>
            <div class="small-boxes-style">
                <div class="img-column">
                    <ImageBoxVue/>
                    <ImageBoxVue/>
                </div>
                <div class="img-column">
                    <ImageBoxVue/>
                    <ImageBoxVue/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageBoxVue from './ImageBox/ImageBox.vue';

export default defineComponent({
    components: {
        ImageBoxVue
    },
    props: {
        productData: Object,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped lang="scss">
    .all-content-boxes {
        display: flex;
        flex-direction: column;
        align-items:center;
        width: 100%;

        .show-all-styles {
            margin: 2rem 0 2rem 0;
        }
        .small-boxes-style {
            display: flex;
            width: 50%;
        }
    }

</style>