<template>
  <div>
    <wbc-nav></wbc-nav>
    <!--中间内容-->
    <div class=" custom-container-small custom-padded-tb-big">
      <div class="ui container">
        <!--header-->
        <div class="ui top attached segment">
          <div class="ui middle aligned two column grid">
            <div class="left aligned column">
              <div class="ui teal header">归档</div>
            </div>
            <div class="right aligned column">共
              <h3 class="ui orange header custom-inline-block custom-text-thin"
                  v-text="archiveData.data.blog_total"></h3> 篇文章
            </div>
          </div>
        </div>
        <th:block v-for="group in archiveData.data.data" :key="group.year">
          <h2 class="ui center aligned header" v-text="group.year"></h2>
          <div class="ui fluid vertical menu">
            <a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank" class="item"
               v-for="blog in group.list" :key="blog.id">
                        <span>
                            <i class="teal mini circle icon"></i><span v-text="blog.title"></span>
                            <div class="ui teal basic left pointing custom-padded-tiny label"
                                 v-text="blog.create_time"></div>
                        </span>
              <div class="ui orange basic custom-padded-mini label" v-text="blog.flag"></div>
            </a>

          </div>
        </th:block>
      </div>
    </div>
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
import {reactive} from "vue"
import {getArchive} from "@/api/home";

export default {
name: "Archives",
  setup(){
    let archiveData=reactive({data:""})
    getArchive().then(res => {
      archiveData.data=reactive(res.data)
      console.log(archiveData);
    })
    return{
      archiveData
    }
  },
  components:{
    'wbc-nav':header,
    'wbc-footer':footer
  }
}
</script>

<style scoped>

</style>