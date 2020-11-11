"""
 * @author  zfj
 * @date  2020/11/6 15:08
"""

<template>
  <p>i am son</p>
  <p>parent name: {{parentName}},parent age: {{parentAge}}</p>
  <!--匿名插槽：slot有几个插入数据就会拷贝几份-->
  <div>默认数据{{names}}</div>
  <slot>默认数据{{names}}</slot>
  <!--具名插槽-->
  <slot name="slotone">默认数据</slot>
  <!--作用域插槽：将数据暴露出去-->
  <slot name="slottwo" v-bind:names="names">默认数据{{names}}</slot>
  <slot name="slotthree" v-bind:names="names">默认数据{{names}}</slot>
  <button @click="sonSay"> son button </button>
</template>

<script>
export default {
  name: "testFather",
  props:["parentName","parentAge"],
  data() {
    return {
      name:"son",
      names:["1","2","3"],
    }
  },
  methods:{
    sonSay(){
      /*第一个参数函数名称，第二个参数传参*/
      this.$emit("parentsay",this.name)
    }
  }
}
</script>

<style scoped>

</style>