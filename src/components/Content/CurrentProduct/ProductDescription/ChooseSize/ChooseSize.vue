<template>
    <div class="size-box">
        <select name="chooseSize" id="chooseSize" class="choose-size regular-border" placeholder="Выбрать размер">
            <option selected disabled>Выбрать размер</option>
            <option v-for="size of sizeList.sort()" value="123">{{size}}</option>
        </select>
        <a href="./">Определить размер</a>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        sizeList: {
            type: Object as PropType<number[]>,
            required: true,
        }
    },
});
</script>

<style scoped lang="scss">
    .size-box {
        display: flex;
        flex-direction: column;
    }
    .choose-size {
        max-width: 315px;
        width: 60%;
        height: 44px;
        appearance: none;
        background: url(/src/assets/corner.png) no-repeat right;
        padding: 0 0.5rem;
        background-position: 96%;
    }
</style>