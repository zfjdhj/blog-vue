<template>
  <wbc-adminnav></wbc-adminnav>
  <div class="ui attached pointing menu">
    <div class="ui container">
      <div th:replace="admin/_fragments :: back">back</div>
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
        <tr th:each="comment,iterStat : ${page.content}">
          <td th:text="${iterStat.count}">1</td>
          <td th:text="${comment.nickname}">who</td>
          <td style="overflow: hidden;text-overflow:ellipsis;">
            <span class="ui custom-text-thin" th:utext="${comment.content}">comment1启动奇偶暗示大家哦啊扫地机欧弟就搜奥的斯阿刁圣诞节奥尼</span>
          </td>
          <td>
            <span class="ui custom-text" th:text="${comment.blog.title}">blogTitle</span>
            <span class="ui custom-text-thin" style="color: #00a1d6" th:if="${comment.parentComment} != null">@</span>
            <span class="ui custom-text-thin" style="color: #00a1d6" th:if="${comment.parentComment} != null" th:text="${comment.parentComment.nickname}" >Reply</span>
          </td>
          <td>
            <span class="ui custom-text-thin" th:text="${#dates.format(comment.createTime,'yyyy-MM-dd')}">yy-MM-dd</span>
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

export default {
name: "Comments",components:{
    "wbc-adminnav":header,
    "wbc-footer":footer
  }
}
</script>

<style scoped>

</style>