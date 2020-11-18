import { createStore } from 'vuex'
import { reactive, provide, inject } from 'vue';

// import {createApp} from "vue"

// createApp.use(createStore())

export default createStore({
  //state相当于组件中的data
  state: {
    msg:"store.js",
    page:{
      blog:0,
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
export const stateSymbol = Symbol('state');
export const createState = () => reactive({ counter: 0 });
export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
    stateSymbol,
    createState()
);
