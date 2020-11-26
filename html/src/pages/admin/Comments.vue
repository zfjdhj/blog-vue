<template>
  <wbc-adminnav></wbc-adminnav>
  <div class="ui attached pointing menu">
    <div class="ui container">
      <router-link to="/">返回前台</router-link>
      <div class="right menu">
        <a href="#" th:href="@{/admin/comments}" class="active teal item">列表</a>
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
      <table class="ui compact teal table" style="table-layout:fixed !important">
        <thead>
        <tr>
          <th style="width: 50px">序列</th>
          <th>评论人</th>
          <th style="width: 170px">评论内容</th>
          <th>评论文章</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(comment,index) in commentListData.data.list" :key="comment.id">
          <td v-text="index+1"></td>
          <td v-text="comment.nickname"></td>
          <td style="overflow: hidden;text-overflow:ellipsis;">
            <span class="ui custom-text-thin"
                  v-html="comment.content"></span>
          </td>
          <td>
            <span class="ui custom-text"
                  v-text="comment.blog_id.title"></span>
            <span class="ui custom-text-thin" style="color: #00a1d6"
                  v-if="comment.parentComment != null">@</span>
            <span class="ui custom-text-thin" style="color: #00a1d6"
                  v-if="comment.parentComment != null"
                  v-text="comment.parentComment.nickname"></span>
          </td>
          <td>
            <span class="ui custom-text-thin"
                  v-text="comment.create_time"></span>
          </td>
          <td>
            <a href="" th:href="@{/admin/comments/{id}/delete(id=${comment.id})}" class="ui mini basic red button">删除</a>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <th colspan="6">
          <div class="ui mini pagination menu" th:if="${page.totalPages}>1">
            <a th:href="@{/admin/comments(page=${page.number}-1)}" class="item" th:unless="${page.first}">上一页</a>
            <a th:href="@{/admin/comments(page=${page.number}+1)}" class="item" th:unless="${page.last}">下一页</a>
          </div>
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
import {getCommentList} from "@/api/adminComment";

export default {
name: "Comments",
  setup(){
    let commentListData=reactive({data:""})
    getCommentList().then(res=>{
      commentListData.data=res.data
      console.log(commentListData.data);
    })
    return{
      commentListData
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