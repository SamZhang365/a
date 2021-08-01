<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword">
  <p>{{ keyword }}</p>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted,customRef
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef, useContext
} from "vue";//从vue导入defineComponent, ref, reactive, computed
//自定义hook防抖函数
//value传入的数据，将来数据的类型不确定，所以用泛型，delay防抖的间隔时间，默认是200ms
function useDebouncedRef<T>(value: T, delay = 200) {
//  准备一个存储定时器的id的变量
  let timeOutId: number;
  return customRef((track, trigger) => {
    return{
      //返回数据
      get() {
        //  告诉vue追踪数据value
        track();
        return value;
      },
      //设置数据
      set(newValue: T) {
        //清理定时器
        clearTimeout(timeOutId);
        //开启定时器
        timeOutId = setTimeout(() => {
          value = newValue;
          //告诉vue数据被修改时，更新界面
          trigger();
        }, delay);
      }
    }
  })
}

export default defineComponent({//导出组件给main函数用
  name: "App",
  setup() {
    // const keyword = ref('abc');
    const keyword = useDebouncedRef('abc', 500);
    return {
      keyword,
    }
  }
})
</script>

<style scoped>

</style>