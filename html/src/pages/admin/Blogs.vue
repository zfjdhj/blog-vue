<template>
  <div>

  <wbc-adminnav></wbc-adminnav>
  <div class="ui attached pointing menu">
    <div class="ui container">
      <router-link to="/">返回前台</router-link>
      <div class="right menu">
        <a href="#" th:href="@{/admin/blogs/input}" class="item">发布</a>
        <a href="#" th:href="@{/admin/blogs}" class="active teal item">列表</a>
      </div>
    </div>
  </div>
  <!--中间内容-->
  <div class="custom-container-small custom-padded-tb-big">
    <div class="ui container">
      <div class="ui secondary segment form">
        <input type="hidden" name="page">
        <div class="inline fields">

          <div class="field">
            <label>
              <input type="text" name="title" placeholder="标题">
            </label>
          </div>

          <div class="field">
            <div class="ui labeled action input">
              <div class="ui type selection dropdown">
                <input type="hidden" name="typeId">
                <i class="dropdown icon"></i>
                <div class="default text">分类</div>
                <div class="menu">
                  <div th:each="type : ${types}" class="item" data-value="1" th:data-value="${type.id}" th:text="${type.name}">分类1</div>
                  <!--/*-->
                  <div class="item" data-value="2">分类2</div>
                  <!--*/-->
                </div>
              </div>
              <button id="clear-btn" class="ui compact button">clear</button>
            </div>
          </div>

          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" id="recommend" name="recommend">
              <label for="recommend">推荐</label>
            </label>
          </div>
          <div class="field">
            <button type="button" id="search-btn" class="ui mini teal basic custom-padded button "><i class="search icon"></i>搜索</button>
          </div>
        </div>
      </div>
      <div class="ui success message" th:unless="${#strings.isEmpty(message)}">
        <i class="close icon"></i>
        <div class="header">提示：</div>
        <p th:text="${message}">操作成功</p>
      </div>
      <div id="table-container">
        <table th:fragment="blogList" class="ui compact teal table">
          <thead>
          <tr>
            <th>序列</th>
            <th>标题</th>
            <th>类型</th>
            <th>点赞</th>
            <th>推荐</th>
            <th>文章状态</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">1</td>
            <td th:text="${blog.title}" th:onclick="|window.location.href='/blog/${blog.id}'|">标题1</td>
            <td th:text="${blog.type.name}">学习日志</td>
            <td th:text="${blog.appreciation} ? ${blog.appreciationCount}:'OFF'" th:onclick="|window.location.href='@{/admin/blogs/{id}/changeAttribute/appreciation&{value}(id=${blog.id},value=${blog.appreciation})}'|">0</td>
            <td th:text="${blog.recommend} ? '是':'否'" th:onclick="|window.location.href='@{/admin/blogs/{id}/changeAttribute/recommend&{value}(id=${blog.id},value=${blog.recommend})}'|">是</td>
            <td th:text="${blog.published} ? '发布':'草稿'" th:onclick="|window.location.href='@{/admin/blogs/{id}/changeAttribute/published&{value}(id=${blog.id},value=${blog.published})}'|">草稿</td>
            <td th:text="${#dates.format(blog.updateTime,'yyyy-MM-dd HH:mm')}">Date-time</td>
            <td>
              <a href="" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini basic teal button">编辑</a>
              <a href="" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini basic red button">删除</a>
            </td>
          </tr>
          </tbody>
          <tfoot>
          <th colspan="8">
            <div class="ui mini pagination menu" th:if="${page.totalPages}>1">
              <a onclick="page(this)" th:attr="data-page=${page.number}-1" class="item" th:unless="${page.first}">上一页</a>
              <a onclick="page(this)" th:attr="data-page=${page.number}+1" class="item" th:unless="${page.last}">下一页</a>
            </div>
            <a href="#" th:href="@{/admin/blogs/input}" class="ui teal mini basic right floated button">新增</a>
          </th>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from "@/components/admin/header";
import footer from "@/components/footer";

export default {
name: "Blogs",
  components:{
  "wbc-adminnav":header,
   "wbc-footer":footer
  }

}
</script>

<style scoped>

</style>