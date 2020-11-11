"""
 * @author  zfj
 * @date  2020/11/6 15:08
"""

<template>
  <!--父子组件数据传递-->
  <!--传递数据格式：v-bind:自定义名称="数据"-->
  <!--接手数据格式：props:["自定义名称"]-->
  <p>i am father</p>
  <p>{{name}}</p>
  <p>{{age}}</p>
  <!--父子组件方法传递-->
  <!--传递方法格式：v-on:自定义名称="方法"-->
  <!--接收方法格式：this.$emit:("自定义名称")-->
  <button @click="say">father button</button>
  <!--动态添加内容：给子组件动态添加内容必须使用插槽slot标签-->
  <son :parentName="name" :parentAge="age" @parentsay="say">
    <div>动态内容-匿名插槽</div>
    <!--具名插槽：v-slot-->
    <template #slotone>动态内容具名插槽1</template>
    <template #slottwo="slottwo">动态内容具名插槽2{{slottwo.names}}</template>
    <template #slotthree="slotthree">
      <ul>
        <li v-for="(name,index) in slotthree.names" :key="index">{{index}}{{name}}</li>
      </ul>
    </template>
  </son>
  <div></div>
  <!--数据传递练习-->
  <p>num:{{num}}</p>
  <son1 @parentchange="change"></son1>
  <son2 :parent-count="num"></son2>
</template>

<script>
import son from "./testSon"
import son1 from "./testSon1"
import son2 from "./testSon2"
export default {
name: "testFather",
  data(){
    return {
      name:"zfj",
      age:18,
      num:0,
    }
  },
  components:{
  son:son,
  son1:son1,
  son2:son2,
  },
  methods:{
    say(name){
      // alert("father")
      console.log(name);
    },
    change(newCount){
      this.num=newCount
    }
  }
}
</script>

<style scoped>

</style>