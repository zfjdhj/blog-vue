<template>
  <wbc-adminnav></wbc-adminnav>
  <div class="ui attached pointing menu">
    <div class="ui container">
      <router-link to="/">返回前台</router-link>
      <div class="right menu">
        <a href="#" th:href="@{/admin/tags/input}" class="item">新增</a>
        <a href="#" th:href="@{/admin/tags}" class="active teal item">列表</a>
      </div>
    </div>
  </div>
  <!--中间内容-->
  <div class="custom-container-small custom-padded-tb-big">
    <div class="ui success message" th:unless="${#strings.isEmpty(message)}">
      <i class="close icon"></i>
      <div class="header">提示：</div>
      <p th:text="${message}">操作成功</p>
    </div>
    <div class="ui container">
      <table class="ui compact teal table">
        <thead>
        <tr>
          <th>序列</th>
          <th>名称</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(tag,index) in tagListData.data.tag_item" :key="tag.tag_id">
          <td v-text="index+1"></td>
          <td>
            <a href="" class="ui basic teal left pointing label custom-text-thin"
               v-text="tag.tag_name"></a>
          </td>
          <td>
            <a href="" th:href="@{/admin/tags/{id}/input(id=${tag.id})}" class="ui mini basic teal button">编辑</a>
            <a href="" th:href="@{/admin/tags/{id}/delete(id=${tag.id})}" class="ui mini basic red button">删除</a>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <th colspan="6">
          <div class="ui mini pagination menu" th:if="${page.totalPages}>1">
            <a th:href="@{/admin/tags(page=${page.number}-1)}" class="item" th:unless="${page.first}">上一页</a>
            <a th:href="@{/admin/tags(page=${page.number}+1)}" class="item" th:unless="${page.last}">下一页</a>
          </div>
          <a href="#" th:href="@{/admin/tags/input}" class="ui teal mini basic right floated button">新增</a>
        </th>
        </tfoot>
      </table>

    </div>
  </div>
  <wbc-footer></wbc-footer>
</template>

<script>
import header from "@/components/admin/header";
import footer from "@/components/footer";
import {reactive} from "vue"
import {getTagList} from "@/api/adminTag";

export default {
name: "Tags",
  setup(){
    let tagListData=reactive({data:""})
    getTagList().then(res=>{
      tagListData.data=res.data
      console.log(tagListData.data);
    })
    return{
      tagListData
    }
  },
  components:{
    "wbc-adminnav":header,
    "wbc-footer":footer
  }
}
</script>

<style scoped>

</style>