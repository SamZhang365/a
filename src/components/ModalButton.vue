<template>
  <button @click="modalOpen=true">打开一个对话框</button>
  <!--  对话框代码-->
  <Teleport to="body">
    <div v-if="modalOpen">
      <div>
        这是对话框
      </div>
      <button @click="modalOpen=false">关闭对话框</button>
    </div>
  </Teleport>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted, customRef, provide, isRef, isProxy, isReactive, isReadonly
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef, useContext
} from "vue";//从vue导入defineComponent, ref, reactive, computed

export default defineComponent({//导出组件给main函数用
  name: "ModalButton",
  setup() {
    //控制对话框显示和隐藏
    const modalOpen = ref(false);
    return {
      modalOpen,
    }
  }

})
</script>

<style scoped>

</style>