<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--&lt;!&ndash;    使用这个子级组件&ndash;&gt;-->
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <div>哈哈，我又变帅了</div>
    <h1>{{number}}</h1>
</template>

<script lang="ts">
//    这里可以使用ts的代码

//defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';
//引入一个子级组件
// import HelloWorld from './components/HelloWorld.vue';
//暴露出去一个定义好的组件
export default defineComponent({
  //  当前组件的名字是App
  name: 'App',
    //测试代码setup是组合API中第一个要使用的函数
    //新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
    //函数如果返回对象,对象中的属性或方法, 模板中可以直接使用
    setup(){
      console.log('我来了')
        const number=10
        return {
          number
        }
    }
  //  注册组件
  // components: {
  //   //  注册一个子级组件
  //   HelloWorld
  // }
});
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
