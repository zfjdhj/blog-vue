<template>
<!--  <keep-alive>-->
    <router-view></router-view>
<!--  </keep-alive>-->

</template>

<script>
import store from "./store"
export default {
  name: 'App',
  store,
  setup(){
    return{
    }
  },
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
  },
  methods:{
    toggle(){
      this.isShow=!this.isShow
      this.switchShow=this.switchShow === "test" ? "test2" : "test";
    },
  }
}
</script>


<style>
*{
  margin: 0px;
  padding: 0px;
}
</style>
