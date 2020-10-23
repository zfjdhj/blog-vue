<template>
  <div>
    <wbc-nav></wbc-nav>
    <!--中间内容-->
    <div class=" custom-container-small custom-padded-tb-big">
      <div class="ui container">
        <!--header-->
        <div class="ui top attached segment">
          <div class="ui middle aligned two column grid">
            <div class="left aligned column">
              <div class="ui teal header">归档</div>
            </div>
            <div class="right aligned column">共 <h3 class="ui orange header custom-inline-block custom-text-thin" th:text="${blogCount}"> 1 </h3> 篇文章
            </div>
          </div>
        </div>
        <th:block th:each="item : ${archiveMap}">
          <h2 class="ui center aligned header" th:text="${item.key}">2019</h2>
          <div class="ui fluid vertical menu">

            <a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank" class="item" th:each="blog : ${item.value}">
                        <span>
                            <i class="teal mini circle icon"></i><span th:text="${blog.title}">123</span>
                            <div class="ui teal basic left pointing custom-padded-tiny label" th:text="${#dates.format(blog.createTime,'MM月dd日')}">Date</div>
                        </span>
              <div class="ui orange basic custom-padded-mini label" th:text="${blog.flag}">原创</div>
            </a>

          </div>
        </th:block>
      </div>
    </div>
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";

export default {
name: "Archives",
  components:{
    'wbc-nav':header,
    'wbc-footer':footer
  }
}
</script>

<style scoped>

</style>