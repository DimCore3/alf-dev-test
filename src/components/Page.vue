<template>
    <div>
        Page
        <ContentVue/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentVue from './Content/Content.vue';

export default defineComponent({
    components: {
        ContentVue,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>