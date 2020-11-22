<template>
  <div>
    <wbc-nav></wbc-nav>
    <wbc-types :path="$route.path"></wbc-types>
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import typeheader from "@/components/header";
import typefooter from "@/components/footer";
import temTypes from "@/components/temTypes";

export default {
  name: "Types",
  created() {
      console.log(this.$route);
      // console.log(this.$route.query.name);
  },
  components:{
    'wbc-nav':typeheader,
    'wbc-footer':typefooter,
    'wbc-types':temTypes
  }
}
</script>

<style scoped>

</style>