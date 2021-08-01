<template>
  <h2>provide与inject</h2>
  <p>当前的颜色{{ color }}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <Son></Son>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted, customRef,provide
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef, useContext
} from "vue";//从vue导入defineComponent, ref, reactive, computed
//自定义hook防抖函数
//value传入的数据，将来数据的类型不确定，所以用泛型，delay防抖的间隔时间，默认是200ms
import Son from "@/components/Son.vue";
export default defineComponent({//导出组件给main函数用
  name: "App",
  components:{
    Son,
  },
  setup() {
    //响应式的数据
    const color = ref('red');
    //提供数据，里面是key，value
    provide('color',color);
    return{
      color,
    }
  }

})
</script>

<style scoped>

</style>