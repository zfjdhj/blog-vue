<template>
  <div class="custom-container-small custom-padded-tb-big">
    <div class="ui container">
      <!--header-->
      <div class="ui top attached segment">
        <div class="ui middle aligned two column grid">
          <div class="column">
            <div class="ui teal header">分类</div>
          </div>
          <div class="right aligned column">共 <h3 class="ui orange header custom-inline-block custom-text-thin" th:text="${#arrays.length(types)}"> 1 </h3> 个
          </div>
        </div>
      </div>
      <!--types-->
      <div class="ui attached segment custom-padded-tb-large">
        <div class="ui labeled button custom-margin-tb-tiny" th:each="type : ${types}">
          <a href="#" th:href="@{/types/{id}(id=${type.id})}" class="ui basic button" th:classappend="${type.id==activeTypeId} ? 'teal'" th:text="${type.name}">type1</a>
          <div class="ui basic left pointing label" th:classappend="${type.id==activeTypeId} ? 'teal'" th:text="${#arrays.length(type.blogs)}">1</div>
        </div>
      </div>

      <!--blogs-->
      <div class="ui top attached teal segment">
        <div class="ui custom-padded vertical segment custom-padded-tb-large" th:each="blog : ${page.content}">
          <div class="ui middle aligned mobile reversed stackable grid">
            <div class="eleven wide column">
              <h3 class="ui header"><a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank" class="custom-black" th:text="${blog.title}">零基础自建个人网站</a></h3>
              <p class="custom-text" th:text="|${blog.description}......|">零基础自建个人网站零基础自建个人网站零零基础自建个人网站零基础自建个人网站零基础自</p>
              <div class="ui stackable grid">
                <div class="row ">
                  <div class="eleven wide column">
                    <div class="ui mini horizontal link list">
                      <div class="item">
                        <img src="" th:src="@{${blog.user.avatar}}" alt="" class="ui avatar image">
                        <div class="content"><a href="#" class="header" th:text="${blog.user.nickname}">ZFJ</a></div>
                      </div>
                      <div class="item"><i class="calendar alternate outline icon"></i><span th:text="${#dates.format(blog.createTime,'yyyy-MM-dd')}">Date</span></div>
                      <div class="item"><i class="eye icon" ></i><span th:text="${blog.views}">123</span></div>
                    </div>
                  </div>
                  <div class="right aligned five wide column">
                    <a href="#" target="_balnk" class="ui teal basic label custom-padded-tiny custom-text-thin" th:text="${blog.type.name}">学习日志</a>
                  </div>
                </div>
                <div class="row custom-padded-tb-tiny">
                  <a href="#" th:href="@{/tags/{id}(id=${tag.id})}" class="ui basic left pointing label custom-text-thin custom-padded-mini"
                     th:each="tag : ${blog.tags}" th:text="${tag.name}">前端</a>
                </div>
              </div>
            </div>
            <div class="five wide column custom-image8x5">
              <a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank">
                <img src="" th:src="@{${blog.firstPicture}}" class="ui rounded image" alt="" th:if="${blog.firstPicture} != 'null'">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--footer-->
      <div class="ui bottom attached segment" th:if="${page.totalPages}>1">
        <div class="ui middle aligned two column grid">
          <div class="column">
            <a href="#" th:href="@{/types/{id}(id=${activeTagId},page=${page.number}-1)}" th:unless="${page.first}" class="ui teal basic mini button">上一页</a>
          </div>
          <div class="right aligned column">
            <a href="#" th:href="@{/types/{id}(id=${activeTagId},page=${page.number}+1)}" class="ui teal basic mini button">下一页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "temTypes"
}
</script>

<style scoped>

</style>