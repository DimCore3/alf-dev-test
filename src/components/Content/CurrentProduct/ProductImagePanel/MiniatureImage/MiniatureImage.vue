<template>
    <div 
        @click="activate()" 
        class='mini-img-block' :class="{'img-is-not-active':!isActive}"
        :style="{ 'background-image' : 'url(\'' + picture + '\')' }"
    >
    </div>
</template>

<script lang="ts">
export default ({

    props:{
        index: Number,
        isActive: Boolean,
        picture: String,
    },

    methods: {
        activate() {
            this.$emit('update:UpdateIndex', this.index)
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

    .img-is-not-active {
        filter: brightness(50%)
    }

    img {
            width:  100%;
            height: 100%;
            position: static;
    }
</style>