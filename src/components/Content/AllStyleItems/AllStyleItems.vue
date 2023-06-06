<template>
    <div class="all-content-boxes">
        <a class="show-all-styles" href="">Посмотреть все стили</a>
        <div class="all-img-style">
            <div class="large-img-prod-style" v-bind:style="{ backgroundImage: 'url(' + otherProducts[0].imgSrc + ')' }">
                <ImgHoverInfo :likesNum="otherProducts[0].likesNum" :link="otherProducts[0].link" />
            </div>
            <div class="small-boxes-style">
                <div class="img-column">
                    <div class="small-prod-img" v-bind:style="{ backgroundImage: 'url(' + otherProducts[1].imgSrc + ')' }">
                        <ImgHoverInfo :likesNum="otherProducts[1].likesNum" :link="otherProducts[1].link" />
                    </div>
                    <div class="small-prod-img" v-bind:style="{ backgroundImage: 'url(' + otherProducts[2].imgSrc + ')' }">
                        <ImgHoverInfo :likesNum="otherProducts[2].likesNum" :link="otherProducts[2].link" />
                    </div>
                </div>
                <div class="img-column">
                    <div class="small-prod-img" v-bind:style="{ backgroundImage: 'url(' + otherProducts[3].imgSrc + ')' }">
                        <ImgHoverInfo :likesNum="otherProducts[3].likesNum" :link="otherProducts[3].link" />
                    </div>
                    <div class="small-prod-img" v-bind:style="{ backgroundImage: 'url(' + otherProducts[4].imgSrc + ')' }">
                        <ImgHoverInfo :likesNum="otherProducts[4].likesNum" :link="otherProducts[4].link" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ImgHoverInfo from './ImageBox/ImgHoverInfo.vue';
interface additionalProductType {
    imgSrc: string,
    link: string,
    likesNum: number,
};
export default defineComponent({
    setup() {
        return {}
    },
    components: {
        ImgHoverInfo
    },
    props: {
        otherProducts: {
            type: Object as PropType<additionalProductType[]>,
            required: true,
        }
    },
})
</script>

<style scoped lang="scss">
.large-img-prod-style,
.small-prod-img {
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.all-content-boxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .show-all-styles {
        margin: 2rem 0 2rem 0;
    }

    .small-boxes-style {
        display: flex;
    }

    a {
        text-decoration: none;
    }
}
</style>