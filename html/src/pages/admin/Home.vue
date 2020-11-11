<template>
  <wbc-adminnav></wbc-adminnav>
  <!--中间内容-->
  <div class="custom-container-small custom-padded-tb-big">
    <div class="ui container">
      <div class="ui success large message">
        <h3>Hi,</h3>
        <p>纸飞机，欢迎登陆！</p>
      </div>
    </div>
  </div>
  <br>
  <br>
  <wbc-footer></wbc-footer>
</template>
<script>


import header from "@/components/admin/header";
import footer from "@/components/footer";

  export default {
    name: "Home",
    components:{
      "wbc-adminnav":header,
      "wbc-footer":footer
    }
  }
</script>

<style scoped>

</style>