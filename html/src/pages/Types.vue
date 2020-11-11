<template>
  <div>
    <wbc-nav></wbc-nav>
    <wbc-types></wbc-types>
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
import temTypes from "@/components/temTypes";

export default {
  name: "Types",
  created() {
      console.log(this.$route);
      console.log(this.$route.query.name);
  },
  components:{
    'wbc-nav':header,
    'wbc-footer':footer,
    'wbc-types':temTypes
  }
}
</script>

<style scoped>

</style>