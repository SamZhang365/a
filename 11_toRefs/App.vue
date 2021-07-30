<template>
  <h2>toRefs的使用</h2>
  <!--  <h3>name:{{ state.name }}</h3>-->
  <!--  <h3>age:{{ state.age }}</h3>-->
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>

  <h3>name2:{{ name2 }}</h3>
  <h3>age2:{{ age2 }}</h3>
</template>
<script lang="ts">

import {defineComponent, reactive, toRefs, watch} from "vue";//从vue导入defineComponent, ref, reactive, computed

function useFeatureX() {
  const state = reactive({
    name2: '自来也',
    age2: 47,
  })
  return{
    ...toRefs(state)//返回一个对象，对象里面的每一个属性都会变成一个ref类型的对象。
  }
}
//把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
//应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
//问题: reactive 对象取出的所有属性值都是非响应式的
//解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性

export default defineComponent({//导出组件给main函数用
  name: "App",
  setup() {
    const state = reactive({
      name: '自来水',
      age: 47,
    })
    // toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref
    const state2 = toRefs(state);
    console.log(state2);
    //定时器，更新数据，如果数据变化了，界面也会随之变化，肯定是响应式的数据
    setInterval(() => {
      // state.name += '=='
      state2.name.value += '=====';
      console.log('=====')
    }, 2000);

    const {name2,age2}=useFeatureX();
    //定时器，更新数据，如果数据变化了，界面也会随之变化，肯定是响应式的数据
    setInterval(() => {
      // state.name += '=='
      name2.value += '=====';
      console.log('=====')
    }, 2000);

    return {
      // state
      ...state2,   //toRefs返回的对象，返回的是state2中的所有属性，都是ref对象。
      name2,
      age2,

    }
  }

})
</script>

<style scoped>

</style>