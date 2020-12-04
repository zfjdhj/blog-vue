<template>
  <div class="custom-container-small custom-padded-tb-big">
    <div class="ui container">
      <!--header-->
      <div class="ui top attached segment">
        <div class="ui middle aligned two column grid">
          <div class="column">
            <div class="ui teal header">分类</div>
          </div>
          <div class="right aligned column">共 <h3 class="ui orange header custom-inline-block custom-text-thin"
                                                  v-text=" typeData.data.type_total "></h3> 个
          </div>
        </div>
      </div>
      <!--types-->
      <div class="ui attached segment custom-padded-tb-large">
        <div class="ui labeled button custom-margin-tb-tiny" v-for="item in typeData.data.type_item" :key="item.blog_total">
          <router-link :to="{path:'/types/'+item.type_id,}" th:href="@{/types/{id}(id=${type.id})}" class="ui basic button" th:classappend="${type.id==activeTypeId} ? 'teal'" v-text="item.type_name"></router-link>
          <div class="ui basic left pointing label" th:classappend="${type.id==activeTypeId} ? 'teal'" v-text="item.blog_total"></div>
        </div>
      </div>

      <!--blogs-->
      <div class="ui top attached teal segment">
        <div class="ui custom-padded vertical segment custom-padded-tb-large" v-for="blog in blogListData.data" :key="blog.id">
          <div class="ui middle aligned mobile reversed stackable grid">
            <div class="eleven wide column">
              <h3 class="ui header"><a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank" class="custom-black" v-text="blog.title"></a></h3>
              <p class="custom-text" v-text="blog.description"></p>
              <div class="ui stackable grid">
                <div class="row ">
                  <div class="eleven wide column">
                    <div class="ui mini horizontal link list">
                      <div class="item">
                        <img src="" th:src="@{${blog.user.avatar}}" alt="" class="ui avatar image">
                        <div class="content"><a href="#" class="header" v-text="blog.user_id"></a></div>
                      </div>
                      <div class="item"><i class="calendar alternate outline icon"></i><span v-text="blog.update_time"></span></div>
                      <div class="item"><i class="eye icon" ></i><span v-text="blog.views"></span></div>
                    </div>
                  </div>
                  <div class="right aligned five wide column">
                    <a href="#" target="_balnk" class="ui teal basic label custom-padded-tiny custom-text-thin" v-text="blog.type_id.name"></a>
                  </div>
                </div>
                <div class="row custom-padded-tb-tiny">
                  <a href="#" th:href="@{/tags/{id}(id=${tag.id})}" class="ui basic left pointing label custom-text-thin custom-padded-mini"
                     th:each="tag : ${blog.tags}" v-for="tag in blog.tags" :key="tag.id" v-text="tag.name"></a>
                </div>
              </div>
            </div>
            <div class="five wide column custom-image8x5">
              <a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank">
                <img src="" th:src="@{${blog.firstPicture}}" class="ui rounded image" alt="" th:if="${blog.firstPicture} != 'null'">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--footer-->
      <div class="ui bottom attached segment" th:if="${page.totalPages}>1">
        <div class="ui middle aligned two column grid">
          <div class="column">
            <a href="#" th:href="@{/types/{id}(id=${activeTagId},page=${page.number}-1)}" th:unless="${page.first}" class="ui teal basic mini button">上一页</a>
          </div>
          <div class="right aligned column">
            <a href="#" th:href="@{/types/{id}(id=${activeTagId},page=${page.number}+1)}" class="ui teal basic mini button">下一页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTypeTop} from "@/api/home";
import {ref,reactive} from "vue"
import {useRoute} from "vue-router"

export default {
  name: "temTypes",
  setup(props, context) {
    let route=useRoute()
    console.log("path",route.path);
    let typeData = reactive({data: ""})
    let id = ref(context.attrs.path.slice(7))
    let blogListData = reactive({data: ""})
    getTypeTop().then(res => {
      res.data.type_item = sortByKey(res.data.type_item, 'blog_total')
      typeData.data = res.data
      console.log("typeData.data", typeData.data);
      console.log(id.value);
      let type_list = typeData.data.type_item;
      if (id.value !=="-1") {
        blogListData.data = type_list.filter((item) => item.type_id === parseInt(id.value))[0].blog_list
      }else{
        blogListData.data = type_list.filter((item,id) => id === 0)[0].blog_list
      }



      console.log("blogListData", blogListData);
    })
    return {
      typeData,
      blogListData,
    }
  },
  watch: {
    "$route"(newValue, oldValue) {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
      if (newValue.name === "Types") {
        let id = ref(newValue.path.slice(7))
         this.blogListData.data = this.typeData.data.type_item.filter((item) => item.type_id === parseInt(id.value))[0].blog_list
      }
    }
  },
}
function sortByKey(array,key){
  return array.sort(function(a,b){
    var x=a[key];        // []  里是个变量   a代表 的是数组中的第一个json对象 。  a.age   因为age是个变量
    var y=b[key];
    return((x<y)?1:((x>y)?-1:0));
  })
}
</script>

<style scoped>

</style>