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
                  <div th:each="type : ${types}" class="item" data-value="1"
                       th:data-value="${type.id}" th:text="${type.name}">分类1</div>
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
          <tr v-for="(blog,index) in blogListData.data.list" :key="blog.id">
            <td v-text="index+1"></td>
            <td v-text="blog.title" th:onclick="|window.location.href='/blog/${blog.id}'|"></td>
            <td v-text="blog.type_id.name"></td>
            <td v-text="blog.appreciation ? blog.appreciation_count:'OFF'"
                th:onclick="|window.location.href='@{/admin/blogs/{id}/changeAttribute/appreciation&{value}(id=${blog.id},value=${blog.appreciation})}'|"></td>
            <td v-text="blog.recommend ? '是':'否'"
                th:onclick="|window.location.href='@{/admin/blogs/{id}/changeAttribute/recommend&{value}(id=${blog.id},value=${blog.recommend})}'|"></td>
            <td v-text="blog.published ? '发布':'草稿'"
                th:onclick="|window.location.href='@{/admin/blogs/{id}/changeAttribute/published&{value}(id=${blog.id},value=${blog.published})}'|"></td>
            <td v-text="blog.update_time"></td>
            <td>
              <router-link href="" :to="{path:'/admin/blogs/'+blog.id+'/input'}"
                 class="ui mini basic teal button">编辑</router-link>
              <router-link href="" :to="{path:'/admin/blogs/'+blog.id+'/delete'}"
                 class="ui mini basic red button">删除</router-link>
            </td>
          </tr>
          </tbody>
          <tfoot>
          <th colspan="8">
            <div class="ui mini pagination menu" th:if="${page.totalPages}>1">
              <a onclick="page(this)" th:attr="data-page=${page.number}-1" class="item" th:unless="${page.first}">上一页</a>
              <a onclick="page(this)" th:attr="data-page=${page.number}+1" class="item" th:unless="${page.last}">下一页</a>
            </div>
            <router-link :to="{path:'/admin/blogs/input'}" class="ui teal mini basic right floated button">新增</router-link>
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
import {reactive} from "vue"
import {getBlogList} from "@/api/adminBlog"
// import {getBlogPage} from "@/api/home";

export default {
name: "Blogs",
  setup(){
    let blogListData=reactive({data:""})
    getBlogList().then(res=>{
      blogListData.data=res.data
      // console.log("page",blogListData.data.page)
      console.log(blogListData.data);
    })
    return{
      blogListData
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