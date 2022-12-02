<template>
    <div class="all-content-boxes">
        <a class="show-all-styles" href="">Посмотреть все стили</a>
        <div class="all-img-style">
            <!-- <ImageBoxVue/> -->
            <div class="large-img-test">
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
            </div>
            <div class="small-boxes-style">
                <div class="img-column">
                    <div class="small-img-test img-test-1">
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
                    </div>
                    <div class="small-img-test img-test-2">
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
                    </div>
                    <!-- <ImageBoxVue/>
                        <ImageBoxVue/> -->
                </div>
                <div class="img-column">
                    <div class="small-img-test img-test-3">
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
                    </div>
                    <div class="small-img-test img-test-4">
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
                    </div>
                    <!-- <ImageBoxVue/>
                    <ImageBoxVue/> -->
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
    setup() {


        return {}
    }
})
</script>

<style scoped lang="scss">
.large-img-test {
    background-image: url("https://github.com/DimCore3/alf-dev-test/blob/main/src/assets/139867.png?raw=true");
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.img-test-1 {
    background-image: url("https://github.com/DimCore3/alf-dev-test/blob/main/src/assets/139867.png?raw=true");
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.img-test-2 {
    background-image: url("https://github.com/DimCore3/alf-dev-test/blob/main/src/assets/139867.png?raw=true");
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.img-test-3 {
    background-image: url("https://github.com/DimCore3/alf-dev-test/blob/main/src/assets/139867.png?raw=true");
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.img-test-4 {
    background-image: url("https://github.com/DimCore3/alf-dev-test/blob/main/src/assets/139867.png?raw=true");
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
}

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

.large-img-test:hover,
.small-img-test:hover {
    .img-hover-info {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
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