<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
  <link rel="stylesheet" href="../static/css/custom.css">
  <link rel="stylesheet" href="../static/css/typo.css" >
  <link rel="stylesheet" href="../static/css/animate.css" >
  <link rel="stylesheet" href="../static/lib/prism/prism.css" >
  <link rel="stylesheet" href="../static/lib/tocbot/tocbot.css">
  <link rel="stylesheet" href="../static/lib/editormd/css/editormd.min.css" >
<!--  <van-button type="primary">主要按钮</van-button>-->
<!--  <van-button type="success">成功按钮</van-button>-->
<!--  <van-button type="default">默认按钮</van-button>-->
<!--  <van-button type="warning">警告按钮</van-button>-->
<!--  <van-button type="danger">危险按钮</van-button>-->
<!--  <p>{{store.state.msg}}</p>-->
<!--  <p>{{// this.$store.state.msg}}</p>-->
<!--  <button @click="log">log</button>-->
  <pluginTest></pluginTest>
<!--  <router-view></router-view>-->
</template>

<script>
// import $ from "jquery"
// console.log($)
// import test3 from "./components/test3"
// import test2 from "./components/test2"
// import store from "./store"
// import {provide} from "vue"
// const stateSymbol = Symbol('state');
// provide(stateSymbol,"msgtest")
export default {
  name: 'App',
  // store:store,
  data() {
    return {
      isShow: true,
      switchShow: "test",
      store:this.$store,
    }
  },
  /*watch可以监听data，route属性变化*/
  watch:{
    "$route.path"(newValue,oldValue){
      console.log(newValue, oldValue);
    }
  },
  components:{
    // "test3":test3,
    // "test2":test2,


  },
  methods:{
    toggle(){
      this.isShow=!this.isShow
      this.switchShow=this.switchShow === "test" ? "test2" : "test";
    },
    // log(){
    //   console.log(this.$router);
    // }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0px;
  padding: 0px;
}
.test2-enter-from{
  opacity: 0;
  /*margin-left: 0px;*/
}
.test2-enter-to{
  opacity: 1;
  margin-left: 500px;
}
.test2-enter-active{
  transition: all 3s;
}
.test2-leave-from{
  opacity: 1;
  /*margin-left: 500px;*/
}
.test2-leave-to{
  opacity: 0;
  /*margin-left: 0px;*/
}
.test2-leave-active{
  transition: all 3s;

}
/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

</style>
