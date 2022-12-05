<template>
    <div 
        class="my-notification"
        v-show="isShow"    
    >
        {{text}}
    </div>
</template>

<script lang="ts">
export default ({
    name: 'my-notification',
    data() {
        return {
            showMessage: this.isShow,
        }
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        isShow: {
            type: Boolean,
            required: true,
        }
    }
})
</script>

<style scoped>
 .my-notification{
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 30rem;
    height: auto;
    background-color: rgb(255, 255, 255);
    border: 2px #515151 solid;
    text-align: center;
    font-size:larger;
    line-height: 2rem;
    padding: 1rem;
 }
</style>