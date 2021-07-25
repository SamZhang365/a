<template>
    <h2>Child子级组件</h2>
    <h3>msg：{{ msg }}</h3>
<!--    <h3>count:{{ count }}</h3>-->
    <button @click="emitXxx">分发事件</button>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "Child",
        props: ['msg'],

        //setup细节问题：
        //setup是在beforeCreate生命周期回调之前就执行了，而且就执行了一次
        //由此可以推断出，setup在执行的时候，当前的组件还没有创建出来，也就意味着组件实例对象this根本就不能用
        //this是undefined，说明就不能通过this再去调用data/computed/methods/prop的相关内容了
        //其实所有的composition API相关回调函数也都是不可以

        //setup中的返回值是一个对象，内部的属性和方法是给html模板使用的
        //setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
        //setup中的对象的属性和data函数中的对象的属性会合并为组件对象的属性
        //setup中的对象的方法和methods对象中的方法会合并为组件对象的方法
        //vue3中尽量不要混合的使用data和setup以及methods和setup，推荐在setup中去写属性和方法
        //methods中可以访问setup提供的属性和方法，但在setup方法中不能访问data和methods

        //数据初始化的生命周期回调
        // beforeCreate() {
        //     console.log('beforeCreate执行了')
        // },
        //界面渲染完毕
        // mounted() {
        // },
        setup(props,context) {
            //props参数，是一个对象，里面有父级组件向子级组件传递的数据，
            // 并且是在子级组件中使用props接收到的所有的属性
            //包含props配置声明且传入了的所有的属性的对象
            // console.log(props)//输出的是Proxy对象
            // console.log(props.msg)//输出的是props对象中msg的值：what are you no sha lei

            //context参数，是一个对象，里面有attrs对象（获取当前组件标签中的所有的属性的对象，
            // 但是该属性是在props中没有声明接收的所有的尚需经的对象），emit方法（分发事件），slot对象（插槽）
            console.log(context)
            console.log(context.attrs.msg2)
            console.log('==========')
            console.log('setup执行了', this)
            const showMsg1=()=>{
                console.log('setup中的showMsg1方法')
            }
            //按钮点击事件的回调函数
            function emitXxx() {
                context.emit('xxx','++')
            }

            return {
                showMsg1,
                emitXxx
                //setup中一般是返回一个对象，对象中的属性和方法都可以在html模板中直接使用
            }
        },
        // data() {
        //     return {
        //         count: 10
        //     }
        // },
        // //界面渲染后的生命周期回调
        // mounted() {
        //     console.log(this)
        // },

    // //    方法
    //     methods:{
    //       showMsg2(){
    //
    //           console.log('methods中的showMsg方法')
    //       }
    //     }
    })
</script>

<style scoped>

</style>