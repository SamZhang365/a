<template>
  <h2>响应式数据的判断</h2>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted, customRef, provide,isRef,isProxy,isReactive,isReadonly
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef, useContext
} from "vue";//从vue导入defineComponent, ref, reactive, computed
//自定义hook防抖函数
//value传入的数据，将来数据的类型不确定，所以用泛型，delay防抖的间隔时间，默认是200ms
export default defineComponent({//导出组件给main函数用
  name: "App",
//  isRef: 检查一个值是否为一个 ref 对象
//  isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
//  isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
//  isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
  setup() {
    //isRef: 检查一个值是否为一个 ref 对象
    console.log(isRef((ref({}))));
    //isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
    console.log(isReactive(reactive({})));
    //  isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    console.log(isReadonly(readonly({})));
    //  isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));
  }
})
</script>

<style scoped>

</style>