<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
  <nav th:fragment="menu(indexCount)" class="ui inverted attached segment custom-padded-tb-mini custom-shadow-small">
    <div class="ui container">
      <div class="ui inverted secondary stackable menu">
        <h2 class="ui teal header item">管理后台</h2>
        <a href="/admin/blogs" th:href="@{/admin/blogs}" class="mobile-item item custom-mobile-hide" th:classappend="${indexCount == 1} ? 'active'"><i class="home icon"></i>文章</a>
        <a href="/admin/types" th:href="@{/admin/types}" class="mobile-item item custom-mobile-hide" th:classappend="${indexCount == 2} ? 'active'"><i class="idea icon"></i>分类</a>
        <a href="/admin/tags" th:href="@{/admin/tags}" class="mobile-item item custom-mobile-hide" th:classappend="${indexCount == 3} ? 'active'"><i class="tags icon"></i>标签</a>
        <a href="/admin/comments" th:href="@{/admin/comments}" class="mobile-item item custom-mobile-hide" th:classappend="${indexCount == 4} ? 'active'"><i class="comments icon"></i>评论</a>
        <a href="/admin/clipboards" th:href="@{/admin/clipboards}" class="mobile-item item custom-mobile-hide" th:classappend="${indexCount == 5} ? 'active'"><i class="copy icon"></i>剪贴板</a>
        <div class="right mobile-item custom-mobile-hide menu">
          <div class="ui dropdown item">
            <div class="text">
              <img src="" th:src="${session.user.avatar}" alt="" class="ui avatar image">
              <sapn th:text="${session.user.nickname}">nickname</sapn>
            </div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <a href="#" th:href="@{/admin/logout}" class="item">注销</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <a href="#" class="ui menu toggle black icon button custom-right-top custom-mobile-show">
      <i class="sidebar icon"></i>
    </a>
  </nav>
</template>

<script>
import "../../../static/css/custom.css"
import "../../../static/css/typo.css"
import "../../../static/css/animate.css"
import "../../../static/lib/prism/prism.css"
import "../../../static/lib/tocbot/tocbot.css"

export default {
name: "header"
}
</script>

<style scoped>

</style>