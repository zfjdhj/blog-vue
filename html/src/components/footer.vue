<template>
  <!--底部footer-->
  <footer class="ui inverted segment custom-padded-tb-huge">
    <div class="ui center aligned container">
      <div class="ui inverted divided stackable grid">
        <div class="three wide column">
          <div class="ui inverted link list">
            <div class="item">
              <img src="../../static/images/WeChat.png"  alt="" class="ui rounded image" style="width: 110px">
            </div>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header custom-text-thin custom-text-spaced ">LINK</h4>
          <div class="ui inverted link list">
            <a href="#" class="item" >。。。。。。</a>
            <a href="#" class="item" >。。。。。。</a>
            <a href="#" class="item" >。。。。。。</a>
            <a href="#" class="item" >。。。。。。</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header custom-text-thin custom-text-spaced ">联系我</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Email：<span >320336328@qq.com</span></a>
            <a href="#" class="item">QQ：320336328</a>
            <a href="#" class="item">微信：zfjdhj</a>
            <a href="#" class="item">主站：zfjdhj.cn</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header custom-text-thin custom-text-spaced ">友情链接</h4>
          <p class="custom-text-thin custom-text-spaced custom-opacity-mini" >..............................</p>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <p class="custom-text-thin custom-text-spaced custom-opacity-tiny">Copyright © 2020 Designed by ZFJ
        <span id="version" onclick="window.location.href='/blog/36'" >网站版本</span></p>
      <div class="custom-opacity-mini">
        当前在线人数：<span id="onlineCount" >null</span>
      </div>
      <div class="custom-opacity-mini">
        互联网ICP备案：<a href="http://beian.miit.gov.cn/" target="_blank">豫ICP备19031358号-1</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: "footer"
}
</script>

<style scoped>

</style>