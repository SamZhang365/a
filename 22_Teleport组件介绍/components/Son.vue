<template>
  <h2>Son子级组件</h2>
  <hr>
  <GrandSon></GrandSon>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GrandSon from "@/components/GrandSon.vue";
export default defineComponent({
  name: "Son",
  components:{
    GrandSon,
  }
})
</script>

<style scoped>

</style>