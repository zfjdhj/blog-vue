<template>
  <div>
    <wbc-nav></wbc-nav>
    <wbc-tags></wbc-tags>
    <wbc-footer></wbc-footer>
  </div>

</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
import temTags from "@/components/temTags";

export default {
  name: "Tags",
  created() {
    console.log(this.$route);
    console.log(this.$route.params.name);
  },
  components:{
    'wbc-nav':header,
    'wbc-tags':temTags,
    'wbc-footer':footer
  }
}
</script>

<style scoped>

</style>