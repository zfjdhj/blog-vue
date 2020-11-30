import { createApp } from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import store from './store'
import router from './router'
import SuiVue from 'semantic-ui-vue';
/*初始化css样式*/
import "../static/css/scss/main.scss"
import "../static/css/main.css"
// import element from "./plugins/element"
// import './plugins/element.js'
/*导入element ui*/
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';

import pulginTest from "./plugins/newplugin/newplugin"

import $ from 'jquery'
import Prism from 'prismjs'

//markdown 编辑器
import VueMarkdownEditor from "@kangc/v-md-editor";
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VueMarkdownEditor.use(vuepressTheme);
//prismjs语法高亮
import 'prismjs/components/prism-java';

// prototype.$
const app=createApp(App)
app.use(router).use(Vuex).use(store).use(SuiVue).use(Vant).use(pulginTest).use($).use(Prism).use(VueMarkdownEditor);
app.directive('color2', {
    // 当被绑定的元素插入到 DOM 中时……
    mounted(el) {
        // Focus the element
        el.style.color="blue"
    }
})
app.directive('color3', {
    // 当被绑定的元素插入到 DOM 中时……
    mounted(el,binding) {
        // Focus the element
        el.style.color=binding.value
    }
})
app.config.globalProperties.$filters = {
    dateFormat(value) {
        let date =new Date(value);
        let year =date.getFullYear();
        let month =date.getMonth()+1+"";
        let day=date.getDate()+"";
        let hour=date.getHours()+"";
        let minute=date.getMinutes()+"";
        let second=date.getSeconds()+"";
        return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")} 
        ${hour.padStart(2,"0")}:${minute.padStart(2,"0")}:${second.padStart(2,"0")}`
    }
}

app.mount('#app')