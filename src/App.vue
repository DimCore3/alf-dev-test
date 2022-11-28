<template>
  <div>
    App
    <PageVue/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageVue from './components/Page.vue';

export default defineComponent({
  components: {
    PageVue,
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>