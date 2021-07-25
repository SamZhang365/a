


<template>
    <h2>App父级组件</h2>
    <h2>{{ msg }}</h2>
    <button @click="msg+='==='">更新数据</button>
    <!--    每click一次，msg在不断的更新值-->
    <hr/>
    <Child :msg="msg" msg2="真香" @xxx="xxx"/>
    <!--    child里面的属性msg拿到右边也就是上面button中msg的值-->
    <!--    并且呈现出child中template模板中的东西-->
</template>

<script lang="ts">
    import {defineComponent, ref} from "vue";
    //引入子级组件child
    // import Child from './components/Child.vue'
    import Child from "@/components/Child.vue";

    export default defineComponent({
        name: "App",
        //注册组件
        components: {Child},
        setup() {
            //定义一个ref类型的数据
            const msg = ref('what are you no sha lei')

            function xxx(txt:string) {
                msg.value += txt;
            }

            return {
                msg,
                xxx
            }
        }

    })
</script>

<style scoped>

</style>