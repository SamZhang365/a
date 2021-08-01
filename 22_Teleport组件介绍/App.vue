<template>
  <h2>App父级组件</h2>]
  <hr>
  <ModalButton></ModalButton>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted, customRef, provide,isRef,isProxy,isReactive,isReadonly
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef, useContext
} from "vue";//从vue导入defineComponent, ref, reactive, computed
import ModalButton from "@/components/ModalButton.vue";
export default defineComponent({//导出组件给main函数用
  name: "App",
  components:{
    ModalButton,
  }
})
</script>

<style scoped>

</style>