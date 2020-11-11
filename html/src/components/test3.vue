"""
 * @author  zfj
 * @date  2020/11/6 15:06
"""
<!--test3 grandfather-->
<template>
  <!--一般组件切换-->
  <!--  <test3>123</test3>-->
  <!--  <button @click="toggle">switch</button>-->
  <!--&lt;!&ndash;  <test v-if="isShow">我是p</test>&ndash;&gt;-->
  <!--&lt;!&ndash;  <test2 v-else>我是false</test2>&ndash;&gt;-->
  <!--  &lt;!&ndash;动态组件切换:区别于一般切换keep-alive可以保存状态&ndash;&gt;-->
  <!--  &lt;!&ndash;组件过渡动画；默认同时执行;mode="out-in";in-out;&ndash;&gt;-->
  <!--  <transition name="test2" mode="out-in">-->
  <!--    <keep-alive>-->
  <!--      <component :is="switchShow"></component>-->
  <!--    </keep-alive>-->
  <!--  </transition>-->

  <!--vuex-->
<!--  <p>{{this.$store.state.msg}}</p>-->
<!--  <p>{{msg}}</p>-->
  <!--父子组件数据传递-->
  <father></father>

</template>

<script>
import father from "./testFather"
// import store from "../store"
// import {inject} from "vue"
// const stateSymbol = Symbol('state');
// const msg=inject(stateSymbol)
// console.log(msg.state);
// console.log(store.state.msg);
// import son from "./testSon"
// import {useStore} from "vuex"
// import {createStore,useStore} from "vuex"
// createStore({
//   state: {
//     msg:"store.state.msg:zfj"
//   },
//   // mutations: {
//   //   increment (state) {
//   //     state.count++
//   //   }
//   // }
// })
// const store =useStore()
// console.log(store.state.msg);
// console.log(store);
export default {
  name: "test3",
  // store:store,
  data(){
    return {
      // msg:msg
    }
  },
  components:{
    father:father,
  }
}
</script>

<style scoped>

</style>