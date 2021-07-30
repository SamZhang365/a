<template>
  <h2>toRaw和markRaw</h2>
  <h3>state:{{ state }}</h3>
  <hr>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw
} from "vue";//从vue导入defineComponent, ref, reactive, computed

interface UserInfo {
  name: string;
  age: number;
  likes?: string[];//?代表这个属性可有可无
}

// toRaw
// 返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
// 这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
// markRaw
// 标记一个对象，使其永远不会转换为代理。返回对象本身
// 应用场景:
//     有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
// 当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。

export default defineComponent({//导出组件给main函数用
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: '小明',
      age: 20,
    })
    //把代理对象变成了普通对象，数据变化，界面不变化
    const testToRaw = () => {
      console.log('我好帅！')
      const user = toRaw(state);
      user.name += '===';

    }
    const testMarkRaw = () => {
      // console.log('测试！！！')
      // state.likes = ['吃', '喝'];
      // state.likes[0] += '==';
      const likes = ['吃', '喝'];
      //markRaw标记的对象数据，从此以后都不能再成为代理对象了。
      state.likes = markRaw(likes);
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += '====';
          console.log('定时器走起来');
        }

      }, 1000)
    }
    return {
      state,
      testToRaw,
      testMarkRaw,

    }
  }
})
</script>

<style scoped>

</style>