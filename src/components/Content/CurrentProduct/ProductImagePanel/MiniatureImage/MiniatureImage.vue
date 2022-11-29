<template>
    <div 
        @click="activate()" 
        class='mini-img-block' :class="{'img-is-active':isActive}"
        :style="{ 'background-image' : 'url(\'' + picture + '\')' }"
    >
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

    props:{
        index: Number,
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
            console.log(this.isActive)

            this.$emit('update:UpdateIndex', this.index)
            console.log('нажал изображение')
            console.log(this.index)
            console.log(this.isActive)
        },
    }

})
</script>

<style scoped>
    .mini-img-block {
        width: 70px;
        height: 91px;
        background-size: cover;
        
    }

    .mini-img-block:hover {        
        filter: brightness(80%)
    }

    .img-is-active {
        filter: brightness(70%)
    }

    img {
            width:  100%;
            height: 100%;
            position: static;
    }
    
</style>