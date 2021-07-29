<template>
    <h2>计算属性和监视</h2>
    <fieldset>
        <legend>姓名操作</legend>
        姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName"><br/>
        名字：<input type="text" placeholder="请输入名字" v-model="user.lastName"><br/>
    </fieldset>
    <fieldset>
        <legend>计算属性和监视的演示</legend>
        姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br/>
        姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br/>
        姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"><br/>
    </fieldset>
</template>

<script lang="ts">
    import {defineComponent, ref, reactive, computed, watch, watchEffect} from "vue";//从vue导入defineComponent, ref, reactive, computed


    export default defineComponent({//导出组件给main函数用
        name: "App",
        setup() {
            //定义一个响应式对象
            const user = reactive({
                //姓氏
                firstName: '东方',
                //名字
                lastName: '不败'
            })
            //vue3中的计算属性
            //如果计算属性中只传入一个回调函数，表示的是get
            //第一个姓名：
            //返回的是一个ref类型的对象
            const fullName1 = computed(() => {
                return user.firstName + '_' + user.lastName;
            })
            // console.log(fullName1);
            //第二个姓名：
            const fullName2 = computed({
                get() {
                    return user.firstName + '_' + user.lastName;
                },
                set(val: string) {
                    // console.log('===',val)
                    const names = val.split('_');
                    user.firstName = names[0];
                    user.lastName = names[1];

                }
            })
            //第三个姓名
            const fullName3 = ref('')

            //监视-------监视指定的数据
            //与watch配置功能一致
            //监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
            //默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
            //通过配置deep为true, 来指定深度监视
            //设置监视user
            watch(user, ({firstName, lastName}) => {
                fullName3.value = firstName + '_' + lastName;
            }, {immediate: true, deep: true})

            //watchEffect不用直接指定要监视的数据 回调函数中使用的哪些响应式数据就监视哪些响应式数据
            //默认初始时就会执行第一次, 从而可以收集需要监视的数据
            //监视数据发生变化时回调
            //监视2 不需要配置immediate，本身默认就是会进行监视，默认执行一次。
            //这里使用的响应式数据为user.firstName和user.lastName，监视的也是他们
            // watchEffect(() => {
            //     fullName3.value = user.firstName + '_' + user.lastName;
            // })

            //监视fullName3的数据，改变user.firstName和user.lastName
            watchEffect(() => {
                const names = fullName3.value.split('_');
                user.firstName = names[0];
                user.lastName = names[1];
            })


            return {
                user,
                fullName1,
                fullName2,
                fullName3
            }
        }


    })
</script>

<style scoped>

</style>