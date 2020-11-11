"""
 * @author  zfj
 * @date  2020/11/6 15:08
"""

<template>
  <!--数据传递练习-->
  <button @click="add">add</button>
  <button @click="minus">minus</button>
  <input type="text" :value="count" >
</template>

<script>
export default {
  name: "testFather",
  props:["parentName","parentAge"],
  data() {
    return {
      name:"son",
      names:["1","2","3"],
      count:0,
    }
  },
  methods:{
    sonSay(){
      /*第一个参数函数名称，第二个参数传参*/
      this.$emit("parentsay",this.name)
    },
    add(){
      this.count++;
      this.$emit("parentchange",this.count)
    },
    minus(){
      this.count--;
      this.$emit("parentchange",this.count)
    },
  }
}
</script>

<style scoped>

</style>