"""
 * @author  zfj
 * @date  2020/11/13 16:34
"""

<template>
  <p>组合API:{{count}}</p>
  <button @click="add">add</button>
  <form>
    <input type="text" v-model="state2.item.id">
    <input type="text" v-model="state2.item.name">
    <input type="text" v-model="state2.item.age">
    <input type="submit" @click="addItem">
  </form>
  <ul>
    <li v-for="(item,index) in state.items" :key="item.id" @click="remItem(index)">
      {{item.id}}---{{item.name}}---{{item.age}}----index:{{index}}
    </li>
  </ul>
  <p>{{state4.time}}</p>
  <button @click="addDay">addDay</button>
  <!--CompositionApiExample5-->
  <p>{{data5_2}}</p>
  <button @click="changeName">changeName</button>
  <!--CompositionApiExample6-->
  <p>{{data6_1}}</p>
  <button @click="changeName6">changeName6</button>
  <!--CompositionApiExample7-->
  <p>{{ count7 }}</p>
  <p>{{ data7 }}</p>
  <button @click="add7">add7</button>
  <!--CompositionApiExample8-->
  <ul>
    <li v-for="(item) in res_data.type_item" :key="item.type_id">{{item.type_id}}--{{item.type_name}}</li>
  </ul>
  <!--CompositionApiExample9-->
  <div ref="box">一个box</div>
</template>

<script>
import useCompositionApiExample1 from "@/CompositionApiExample/CompositionApiExample1";
import useCompositionApiExample2 from "@/CompositionApiExample/CompositionApiExample2";
import useCompositionApiExample3 from "@/CompositionApiExample/CompositionApiExample3";
import useCompositionApiExample4 from "@/CompositionApiExample/CompositionApiExample4";
import useCompositionApiExample5 from "@/CompositionApiExample/CompositionApiExample5";
import useCompositionApiExample6 from "@/CompositionApiExample/CompositionApiExample6";
import useCompositionApiExample7 from "@/CompositionApiExample/CompositionApiExample7";
import useCompositionApiExample8 from "@/CompositionApiExample/CompositionApiExample8";
import useCompositionApiExample9 from "@/CompositionApiExample/CompositionApiExample9";

export default {
name: "test4",
  /*vue3-setup函数是组合API的入口函数*/
  setup(){
    let {count,add}=useCompositionApiExample1()
    let {state,remItem}=useCompositionApiExample2()
    let {state2,addItem}=useCompositionApiExample3(state)
    let {state4,addDay}=useCompositionApiExample4()
    let {data5_1,data5_2,changeName}=useCompositionApiExample5()
    let {data6_1,data6_2,changeName6}=useCompositionApiExample6()
    let {count7,add7}=useCompositionApiExample7.useCompositionApiExample7()
    let data7=useCompositionApiExample7.myRef(7)
    let {res_data}=useCompositionApiExample8("http://django.test.cn/api/get_type")
    let {box}=useCompositionApiExample9()
    return {count,add,
      state,remItem,
      state2,addItem,
      state4,addDay,
      data5_1,data5_2,changeName,
      data6_1,data6_2,changeName6,
      count7,add7,data7,
      res_data,
      box,
    }}
}
</script>

<style scoped>

</style>