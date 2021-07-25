//程序的主入口，ts文件，是main.ts
//引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
//引入App组件（所有组件的父组件）
import App from './App.vue'//导入 export default defineComponent导出的Vue
//创建App应用返回对应的实例对象，调用mount方法进行挂载
//挂载到public文件夹中index.html的id为app的地方，app的template就可以在index.html中使用
createApp(App).mount('#app')
