<template>
  <h2>toRef的使用及特点：</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <hr>
  <button @click="update">更新数据</button>
  <hr>
  <child2 :age="age"></child2>
</template>
<script lang="ts">

import {
  defineComponent, ref, reactive, toRefs, watch, onMounted
  , shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw, toRef
} from "vue";//从vue导入defineComponent, ref, reactive, computed
import Child2 from "@/components/Child2.vue";

export default defineComponent({//导出组件给main函数用
  name: "App",
  components:{
    Child2,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    })
    //把响应式数据state对象中的某个属性age变成ref对象,
    // age和state.age二者内部操作的是同一个数据值, 更新时二者是同步的
    const age = toRef(state, 'age');
    //把响应式对象中的某个属性使用ref进行包装，变成一个ref对象,
    // 拷贝了一份新的数据值单独操作, 更新时money和state.money相互不影响
    const money = ref(state.money);
    //更新数据
    console.log(age);
    console.log(money);
    const update = () => {
      // console.log('测试！');
      state.age+=2;
      //age.value+=3;
    }
    return {
      state,
      age,
      money,
      update,
    }
  }
})
</script>

<style scoped>

</style>