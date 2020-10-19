<!-- 首页 -->
<template>
  <div>
    <wbc-nav></wbc-nav>
    <div class="ui container">
<!--      <el-row  :gutter="30">-->
<!--        <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">-->
          <wbc-Bloglist></wbc-Bloglist>
<!--        </el-col>-->
<!--        <el-col :sm="24"  :md="8" >-->
<!--          <wbc-rightlist></wbc-rightlist>-->
<!--        </el-col>-->
<!--      </el-row>-->
    </div>
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temBloglist from '../components/temBloglist.vue'
export default {
  name: "Home",
  components: { //定义组件
    'wbc-nav':header,
    'wbc-Bloglist':temBloglist,
    // 'wbc-rightlist':temRightlist,
    'wbc-footer':footer
  },
}
</script>

<style scoped>

</style>