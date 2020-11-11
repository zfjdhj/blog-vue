<template>
<!--  <wbc-adminnav></wbc-adminnav>-->
<!--  <div class="ui attached pointing menu">-->
<!--    <div class="ui container">-->
<!--      <div th:replace="admin/_fragments :: back">back</div>-->
<!--      <div class="right menu">-->
<!--        <a href="#" th:href="@{/admin/tags/input}" class="item">新增</a>-->
<!--        <a href="#" th:href="@{/admin/tags}" class="active teal item">列表</a>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <!--中间内容-->
  <router-view></router-view>
<!--  <wbc-footer></wbc-footer>-->
</template>

<script>
// import header from "@/components/admin/header";
// import footer from "@/components/footer";

export default {
name: "Index",
  components:{
    // "wbc-adminnav":header,
    // "wbc-footer":footer
  }
}
</script>

<style scoped>

</style>