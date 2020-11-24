<template>
<!--  <link rel="stylesheet" href="../../static/css/custom.css">-->
  <nav class="ui inverted attached segment custom-padded-tb-mini custom-shadow-small">
    <div class="ui container">
      <div class="ui inverted secondary stackable menu">
        <h2 class="ui teal header item">纸飞机的个人小站</h2>
<!--        <a href="/home"  class="mobile-item item custom-mobile-hide"><i class="home icon"></i>首页</a>-->
        <router-link to="/home" class="mobile-item item custom-mobile-hide"><i class="home icon"></i>首页</router-link>
<!--        <a href="/types"  class="mobile-item item custom-mobile-hide"><i class="idea icon"></i>分类</a>-->
        <router-link to="/types/-1"  class="mobile-item item custom-mobile-hide"><i class="idea icon"></i>分类</router-link>
<!--        <a href="/tags"  class="mobile-item item custom-mobile-hide"><i class="tags icon"></i>标签</a>-->
        <router-link to="/tags/-1"  class="mobile-item item custom-mobile-hide"><i class="tags icon"></i>标签</router-link>
<!--        <router-link to="/tools"  class="mobile-item item custom-mobile-hide"><i class="tags icon"></i>Tool</router-link>-->
<!--        <a href="/archives"  class="mobile-item item custom-mobile-hide"><i class="clone icon"></i>归档</a>-->
        <router-link to="/archives"  class="mobile-item item custom-mobile-hide"><i class="clone icon"></i>归档</router-link>
        <div class="right custom-mobile-hide mobile-item item">
          <form name="search" action="#" method="post" target="_blank">
            <label class="ui icon inverted transparent input">
              <input name="query" placeholder="Search...." type="text">
            </label>
            <i onclick="document.forms['search'].submit()" class="search link inverted icon"></i>
          </form>
        </div>
      </div>
    </div>
    <a href="#" class="ui menu toggle black icon button custom-right-top custom-mobile-show">
      <i class="sidebar icon"></i>
    </a>
  </nav>
</template>

<script>
// import $ from "jquery"
import "../../static/css/custom.css"
export default {
name: "header",
  created() {

  }
}
</script>

<style scoped>



</style>