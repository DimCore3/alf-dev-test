<template>
    <div class='my-footer-content'>
        <RefBoxListVue/>
        <SubscribeFormVue/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RefBoxListVue from './RefBoxList/RefBoxList.vue';
import SubscribeFormVue from './SubscribeForm/SubscribeForm.vue'

export default defineComponent({
    components: {
        RefBoxListVue,
        SubscribeFormVue
    },
    setup() {


        return {}
    }


})
</script>

<style scoped lang="scss">
.my-footer-content {
    height: 15rem;
    display: flex;
}

.left-side-footer {
    h3 {
        text-transform: uppercase;
    }
}
</style>