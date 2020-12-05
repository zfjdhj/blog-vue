<template>
  <!--Left-->
<!--  <div class="eleven wide column">-->
    <!--header-->
    <div class="ui top attached segment">
      <div class="ui middle aligned two column grid">
        <div class="column">
          <div class="ui teal header">文章</div>
        </div>
        <div class="right aligned column">
          共 <h3 class="ui orange header custom-inline-block custom-text-thin" v-text=" blogListData.data.total "></h3> 篇
        </div>
      </div>
    </div>
<!--  <p>{{mode}}&#45;&#45;{{page}}&#45;&#45;{{blogListData.data.total}}</p>-->
    <!--content-->
    <div v-for="blog in blogListData.data.list" :key="blog.id" class="ui attached segment">
      <div class="ui custom-padded vertical segment custom-padded-tb-large" >
        <div class="ui middle aligned mobile reversed stackable grid">
          <div style=""  :class="blog.first_picture !== 'null' ? 'eleven wide column':' sixteen wide column'">
            <h3 class="ui header"><router-link :to="{path:'/blog/'+blog.id}" class="custom-black" v-text="blog.title"></router-link></h3>
            <p class="custom-text" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;" v-text="blog.description"></p>
            <div class="ui stackable grid">
              <div class="row ">
                <div class="eleven wide column" >
                  <div class="ui mini horizontal link list">
                    <div class="item">
                      <img src="../../static/images/icon.png" alt="" class="ui avatar image">
                      <div class="content"><a href="#" class="header" v-text="blog.user_id"></a></div>
                    </div>
                    <div class="item"><i class="calendar alternate outline icon"></i><span v-text="blog.update_time"></span></div>
                    <div class="item"><i class="eye icon" ></i><span v-text="blog.views"></span></div>
                  </div>
                </div>
                <div class="right aligned five wide column">
                  <a href="#" target="_balnk" class="ui teal basic label custom-padded-tiny custom-text-thin"
                     v-text="blog.type_id.name"></a>
                </div>
              </div>
              <div class="row custom-padded-tb-tiny">
                <a v-for="tag in blog.tags" :key="tag.id" href="#" class="ui basic left pointing label custom-text-thin custom-padded-mini"
                   v-text="tag.name"></a>
              </div>
            </div>
          </div>
          <div class="five wide column" v-if="blog.first_picture !== 'null'">
            <a href="#" target="_blank" >
<!--              <p>{{blog.first_picture}}</p>-->
              <img :src="'/static/' + blog.first_picture" class="ui rounded image custom-image8x5"  alt="" >
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--footer-->
    <div class="ui bottom attached segment" >
      <div class="ui middle aligned two column grid">
        <div class="column">
          <router-link :to="{path:'/home',query:{page:page-1}}"
                       class="ui teal basic mini button"
                       v-show="page>1"
                       >上一页</router-link>
        </div>
<!--        <p>{{page}}</p>-->
        <div class="right aligned column">
          <router-link :to="{path:'/home',query:{page:page+1}}"
                       class="ui teal basic mini button"
                       v-show="page*10 < blogListData.data.total"
                        >下一页</router-link>
<!--          <button @click="test">test</button>-->
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
import { getBlogPage } from "@/api/home"
import {ref,reactive, onMounted} from "vue"
// import {ref,reactive, onMounted} from "vue"
// import store from "../store"

export default {
name: "temBloglist",
  // props: {
  //   // eslint-disable-next-line no-undef
  //   teststr: this.$route
  // },
  setup(props,context){
    console.log("props",props);
    console.log("context",context);
    // Attribute (非响应式对象)
    console.log(context.attrs)
    // 插槽 (非响应式对象)
    console.log(context.slots)
    // 触发事件 (方法)
    console.log(context.emit)
    // const ctx= getCurrentInstance();
    // console.log("p0");
    // console.log(ctx)
    // console.log("p1");
    // console.log(root.$route)
    // console.log("p1-2");//获取路由对象信息
    // console.log(ctx.$router)   //获取路由对象信息
    // console.log("p2");
    // // console.log(ctx.$root.$route.query.page)   //获取路由对象信息
    // console.log("p3");
    // console.log(props);
    // console.log("p4");
    // console.log(context);
    // console.log(context.slots);
    let mode=ref("blog")
    let page=ref(1)
    if(context.attrs.path.path ==="/"||context.attrs.path.path ==="/home" ){
      if(context.attrs.path.query.page){
        console.log("加载blog列表");
        console.log(context.attrs.path.query.page);
        page.value=context.attrs.path.query.page
        console.log("page2",page.value)
      }
    }


    let tmp=reactive({
      data:0
    })
    let blogListData=reactive({data:""})
    console.log("加载blog...")
    console.log("page3",page.value)
    getBlogPage(page.value-1).then(res=>{
      blogListData.data=res.data
      // console.log("page",blogListData.data.page)
      console.log(blogListData.data);
    })

    onMounted(()=>{

    })
    // console.log(tmp);
    // console.log(getBlog(page.value));
    return{
      mode,
      page,
      blogListData,
      tmp,
      // back
      }
  },
  methods:{
    test: function () {
      console.log(this.page)
    }
  },
  watch:{
      "$route.query"(newValue,oldValue){
        console.log('newValue',newValue);
        console.log(newValue.page);
        console.log('oldValue',oldValue);
        if (newValue.page>0){
          getBlogPage(newValue.page-1).then(res=>{
            this.blogListData.data=res.data
            console.log(this.blogListData.data);
            this.page=parseInt(newValue.page)
            console.log(this.page);
          })
        }
      }
  },

}
</script>

<style scoped>

</style>