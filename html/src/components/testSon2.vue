"""
 * @author  zfj
 * @date  2020/11/6 15:08
"""

<template>
  <!--数据传递练习-->
  <p>son2</p>
<!--  <slot></slot>-->
  <p>{{parentCount}}</p>
</template>

<script>
export default {
  name: "testFather",
  props:["parentName","parentAge","parentCount"],
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