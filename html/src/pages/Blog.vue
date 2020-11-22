"""
* @author  zfj
* @date  2020/11/19 14:49
"""

<template>
  <wbc-nav></wbc-nav>
  <wbc-blog :path="$route.path"></wbc-blog>
  <wbc-footer></wbc-footer>
</template>

<script>
import header from "../components/header"
import footer from "../components/footer"
import blog from "../components/temBlog"
export default {
  name: "Blog",
  components:{
    'wbc-nav':header,
    'wbc-blog':blog,
    "wbc-footer":footer
  },
}
</script>

<style scoped>

</style>