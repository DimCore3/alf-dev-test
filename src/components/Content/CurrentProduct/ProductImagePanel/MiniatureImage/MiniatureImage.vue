<template>
    <div @click="activate()" class='mini-img'>
        <img :src="picture" alt="Изображение">
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

    props:{
        isActive: Boolean,
        picture: String,
    },

    setup () {
        return {}
    },

    mounted() {
        console.log(this.picture)
    },
    methods: {
        activate() {
            console.log('нажал изображение')
        },
    }

})
</script>

<style scoped>
    .mini-img {
        width: 70px;
        height: 91px;
        background: rgb(255, 195, 195);
    }
</style>