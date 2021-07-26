<template>
    <h2>自定义hook函数操作</h2>
    <h2>x:{{ x }},y:{{ y }}</h2>
    <h3 v-if="loading">正在加载中...</h3>
    <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>//两个errorMsg不懂
    <ul v-else>
        <li>id:{{ data.id }}</li>
        <li>address:{{ data.address }}</li>
        <li>distance:{{ data.distance }}</li>
    </ul>
    <hr>
    <!--    数组数据-->
    <!--    :key="item.id"为每项提供一个独一无二的key, : 是v-bind的缩写   -->
    <ul v-for="item in data" :key="item.id">
        <li>id:{{ item.id }}</li>
        <li>title:{{ item.title }}</li>
        <li>price:{{ item.price }}</li>
    </ul>
</template>
<script lang="ts">

    import {defineComponent, watch} from "vue";//从vue导入defineComponent, ref, reactive, computed
    //导入useMousePosition
    import useMousePosition from "@/hooks/useMousePosition";
    import useRequest from "@/hooks/useRequest";
    //定义接口，约束对象的类型
    interface IAddressData{
        id:number;
        address:string;
        distance:string
    }
    interface IProductData{
        id:string;
        title:string;
        price:number
    }
    export default defineComponent({//导出组件给main函数用
        name: "App",
        //需求1：用户在页面中点击页面，把点击位置的横纵坐标收集起来，并展示出来。
        //注册组件
        // components: {},
        setup() {
            //拿到useMousePosition的返回值
            const {x, y} = useMousePosition();
            //发送请求
            // const {loading,data,errorMsg}=useRequest<IAddressData>('./data/address.json')//获取对象数据
            const {loading, data, errorMsg} = useRequest<IProductData[]>('./data/products.json');//获取数组数据
            //监视
            watch(data, () => {
                if (data.value) {
                    console.log(data.value.length);//不懂
                }
            })

            return {
                x,
                y,
                loading,
                data,
                errorMsg
            }
        }
    })
</script>

<style scoped>

</style>