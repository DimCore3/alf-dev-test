<template>
    <div class="full-page-content">
        <HeaderVue/>
        <div>
            <ContentVue :productData='productData'/>
        </div>
        <FooterVue/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentVue from './Content/Content.vue';
import HeaderVue from './Header/Header.vue';
import FooterVue from './Footer/Footer.vue';

export default defineComponent({
    components: {
        ContentVue,
        HeaderVue,
        FooterVue,
    },

    props: {
        productData:{
            type:Object,
            required: true,
        }
    },

})
</script>

<style scoped>

</style>