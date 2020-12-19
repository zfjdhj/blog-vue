<!-- 首页 -->
<template>
  <div>
    <wbc-nav></wbc-nav>
    
<!--<keep-alive>-->
    <div class="custom-container custom-padded-tb-big">
      <div class="ui container">
        <div class="ui stackable grid">
          <div class="eleven wide column">
              <wbc-Bloglist :path="$route">
              </wbc-Bloglist>
          </div>
          <div class="five wide column">
              <wbc-Rightlist></wbc-Rightlist>
          </div>
        </div>
      </div>
    </div>
<!--</keep-alive>-->
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temBloglist from '../components/temBloglist.vue'
import temRightlist from '../components/temRightlist.vue'
import LoginVue from './admin/Login.vue'
export default {
  name: "Home",
  mounted() {
    console.log("loading...")
  },
  components: { //定义组件
    'wbc-nav':header,
    'wbc-Bloglist':temBloglist,
    'wbc-Rightlist':temRightlist,
    'wbc-footer':footer,
  },
}
</script>

<style scoped>

</style>