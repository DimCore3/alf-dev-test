<template>
    <div 
        @click="activate()" 
        class='mini-img-block' :class="{'img-is-not-active':!isActive}"
        v-bind:style="{ backgroundImage: 'url(' + picture + ')' }"
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

<style scoped lang="scss">
    .mini-img-block {
        width: 70px;
        height: 91px;
        background-size: cover;
        
    }

    .mini-img-block:hover {        
        filter: brightness(80%);
        transition: 0.05s linear;
    }

    .img-is-not-active {
        filter: brightness(50%);
        transition: 0.05s linear;
    }

    img {
            width:  100%;
            height: 100%;
            position: static;
    }
</style>