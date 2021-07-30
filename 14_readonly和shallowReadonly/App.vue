<template>
  <h2>readonly和shallowReadonly </h2>
  <h3>state:{{ state }}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted
  , shallowReactive, shallowRef, readonly,shallowReadonly
} from "vue";//从vue导入defineComponent, ref, reactive, computed

//readonly:
//深度只读数据
//获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
//只读代理是深层的：访问的任何嵌套 property 也是只读的。
//shallowReadonly
//浅只读数据
//创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
//应用场景:
    //在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除

export default defineComponent({//导出组件给main函数用
  name: "App",
  setup() {
    const state = reactive({
      name: '佐助',
      age: 20,
      car: {
        name: '奔驰',
        color: 'yellow'
      }
    })
    //只读数据-----深度的只读
    // const state2 = readonly(state);
    //只读数据-----浅度的只读，不影响嵌套对象
    const state2=shallowReadonly(state);
    const update = () => {
      // console.log('测试！');
      // state2.name += '===';//不行,因为state2是只读数据
      state2.car.name += '===';//不行，因为state2是只读数据，内层的数据也是只读的
    }
    return {
      state,
      update,
    }
  }
})
</script>

<style scoped>

</style>