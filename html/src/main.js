import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import SuiVue from 'semantic-ui-vue';
// import $ from 'jquery'

// prototype.$
createApp(App).use(router).use(store).use(SuiVue).mount('#app')