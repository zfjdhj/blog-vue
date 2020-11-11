<template>
  <div>
    <button @click="add">累加</button>
    <p>{{number}}</p>
    <!--watch-->
    <input type="text" v-model="num1" ref="input1">
    <span>+</span>
    <input type="text" v-model="num2">
    <span>=</span>
    <input type="text" v-model="res" disabled="true">
  </div>
</template>



<script>
export default {
  name: "test2",
  mounted() {
    console.log(this.$refs);
    console.log(this.$refs.input1);
  },
  data() {
      return {
        name: "纸飞机的痕迹",
        msg: "这是一条测试msg",
        time:Date.now(),
        span:"<span>123</span>",
        isShow:true,
        show:true,
        hidden:false,
        list:["item1","item2","item3"],
        list2:[
            {name:"item1",id:1},
            {name:"item2",id:2},
            {name:"item3",id:3}
        ],
        id:3,
        obj_class:{
          size:false,
          color:true,
          active:true
        },
        obj_style1:{
          color:'blue',
          'font-size':'90px'
        },
        obj_style2:{
          'background-color':'red'
        },
        number:0,
        num1:0,
        num2:0,
        res:0
      }
    },
  watch:{
    num1:function (newValue,oldValue){
      // console.log(this.num1);
      console.log(newValue, oldValue);
      this.res=parseInt(this.num1)+parseInt(this.num2)
    },
    num2(){
      this.res=parseInt(this.num1)+parseInt(this.num2)
    }
  },
  methods:{
      add(){
        this.number++;
      }
    },
}
</script>

<style scoped>

</style>