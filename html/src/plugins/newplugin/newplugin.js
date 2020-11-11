// import {createApp} from "vue"
import pluginTest from "./pluginTest"


// export default {
//     install: (app, options) => {
//         // Plugin code goes here
//     }
// }

export default {
    install: (app/*,options*/) => {
        app.component("pluginTest",pluginTest)
        //1.根据组件生成一个构造函数
        // let NewPluginContructor=extends(pluginTest)
        //2.根据构造函数生成实例对象
        // let NewPulginInstance=pluginTest
        // //3.随便创建一个元素
        // let adiv=document.createElement("div")
        // //4.将创建好的元素添加到界面上
        // document.body.appendChild(adiv)
        // //5.将创建好的实例对象挂载到创建好的元素上
        // new NewPulginInstance.mount(adiv)
        }
    }