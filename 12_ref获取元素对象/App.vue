<template>
  <h2>ref的另一个作用：可以获取页面中的元素</h2>
  <input type="text" ref="inputRef"/>
</template>
<script lang="ts">

import {defineComponent, ref, reactive, toRefs, watch, onMounted} from "vue";//从vue导入defineComponent, ref, reactive, computed
export default defineComponent({//导出组件给main函数用
  name: "App",
//  需求：当页面加载完毕后，页面中的文本框可以直接自动获取焦点
  setup() {
    //默认是空的，页面加载完毕后，说明组件已经存在了，获取文本框元素
    const inputRef = ref<HTMLElement | null>(null);
    //页面加载后的生命周期组合API
    onMounted(() => {
      inputRef.value && inputRef.value.focus()//自动获取焦点
    })
    return {
      inputRef
    }
  }
})
</script>

<style scoped>

</style>