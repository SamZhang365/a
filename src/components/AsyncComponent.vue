<template>
  <h2>AsyncComponent子级组件</h2>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted, customRef, provide,isRef,isProxy,isReactive,isReadonly
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef, useContext
} from "vue";//从vue导入defineComponent, ref, reactive, computed
export default defineComponent({//导出组件给main函数用
  name: "AsyncComponent",
  setup(){

    return{

    }
  }
})
</script>

<style scoped>

</style>