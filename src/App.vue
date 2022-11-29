<template>
  <div>
    <PageVue :productData='productData' />
  </div>
</template>

<script lang="ts">
import ProductDataInterface from './interface'
import { defineComponent } from 'vue'
import PageVue from './components/Page.vue';

export default defineComponent({
  components: {
    PageVue,
  },

  setup() {
    return {}
  },

  data() {
    let productData:ProductDataInterface = {
      productName: 'Пижама для девочек',
      articleCode: "02765/46",
      sizeList: [
        32, 34, 40, 30, 38
      ],
      price: {
        oldPrice: 1500,
        discounts: [
          20, 36
        ],
      },
      commentsCountRate: 14,
      allImgSrc: [
        './assets/14896420.png',
        '',
        '',
        '',
        '',
      ],
      allStyleImgSrc: [
        '',
        ''
      ], 
    }

    return {
      productData
    }
  }

})
</script>

<style scoped>

</style>