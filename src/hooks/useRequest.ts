import {ref} from "vue";
import axios from "axios";
//发送axios请求
export default function <T>(url: string) {
    //加载的状态
    const loading = ref(true);
    //请求成功的数据
    const data = ref<T | null>(null);//|不懂
    //错误信息
    const errorMsg = ref('');
    axios.get(url).then(Response => {
        //    成功时改变加载状态
        loading.value = false;
        data.value = Response.data;
    }).catch(Error => {
        //    失败时改变加载状态
        loading.value = false;
        errorMsg.value = Error.message || '未知错误';
    })
    return {
        loading,
        data,
        errorMsg
    }
}