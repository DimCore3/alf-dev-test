<template>
    <div>
        Page
        <ContentVue :productData='productData'/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentVue from './Content/Content.vue';

export default defineComponent({
    components: {
        ContentVue,
    },

    props: {
        productData: Object
    },

})
</script>

<style scoped>

</style>