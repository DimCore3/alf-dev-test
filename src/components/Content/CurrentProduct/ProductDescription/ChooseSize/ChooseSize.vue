<template>
    <select name="chooseSize" id="chooseSize" class="choose-size regular-border" placeholder="Выбрать размер">
        <option selected disabled>Выбрать размер</option>
        <option v-for="size of sizeList" value="123">{{size}}</option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        sizeList:Array,
    }
})
</script>

<style scoped>
    .choose-size {
        max-width: 315px;
        width: 60%;
        height: 44px;
        appearance: none;
        background: url(/src/assets/corner.png) no-repeat right;
        padding: 0 0.5rem;
    }
</style>