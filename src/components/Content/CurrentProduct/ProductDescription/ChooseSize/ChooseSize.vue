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
        width: 315px;
        height: 44px;
        padding: 4px 8px;
        gap: 10px;
        appearance: none;
        background: url('../../../../../assets/corner.png') no-repeat right;
    }
</style>