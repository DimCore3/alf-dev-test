<template>
    <div class="full-page-content">
        <HeaderVue 
            v-myScroll="handleScroll"
        />
        <div>
            <ContentVue :productData='productData' />
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

    directives: {
        myScroll: {
            mounted(el, binding) {
                window.addEventListener('scroll', () => {
                    binding.value(el)
                })
            }
        }
    },
    props: {
        productData: {
            type: Object,
            required: true,
        }
    },

    methods: {
        handleScroll: (el: Element) => {
            el.setAttribute(
                'style',
                'opacity:' + (1 - (window.scrollY / 20))
            )
        }   
    }
})
</script>

<style scoped>

</style>