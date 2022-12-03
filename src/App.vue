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
          24, 10
        ],
      },
      rating: {
        commentsCount: 14,
        productRate: 4,
      },
      allImgSrc: [
        './main-photos/main1.png',
        './main-photos/main2.png',
        './main-photos/main3.png',
        './main-photos/main4.png',
        './main-photos/main5.png',
      ],
      otherProducts: [
        {
          imgSrc: './product-styles-images/1.png',
          link: './abc',
          likesNum: 100,
        },
        {
          imgSrc: './product-styles-images/2.png',
          link: './aaa',
          likesNum: 23,
        },
        {
          imgSrc: './product-styles-images/3.png',
          link: './are',
          likesNum: 10,
        },
        {
          imgSrc: './product-styles-images/4.png',
          link: './rrrr',
          likesNum: 421,
        },
        {
          imgSrc: './product-styles-images/5.png',
          link: './llaa',
          likesNum: 67,
        },
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