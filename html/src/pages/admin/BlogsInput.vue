<template>
  <wbc-adminnav></wbc-adminnav>
  <div class="ui attached pointing menu">
    <div class="ui container">
      <div th:replace="admin/_fragments :: back">back</div>
      <div class="right menu">
        <a href="#" th:href="@{/admin/blogs/input}" class="active teal item">发布</a>
        <a href="#" th:href="@{/admin/blogs}" class="item">列表</a>
      </div>
    </div>
  </div>
  <!--中间内容-->
  <div class="custom-container custom-padded-tb-big">
    <div class="ui container">
      <form id="blog-form" action="#" th:object="${blog}" th:action="@{/admin/blogs}" method="post" class="ui form">
        <input type="hidden" name="published"  th:value="*{published}">
        <input type="hidden" name="id" th:value="*{id}">
        <label class="required field">
          <div class="ui left labeled input">
            <div class="ui selection compact teal basic dropdown label"
                 :class="dropdownLabel" @click="changeShow">
              <input type="hidden" v-model="blogData.data.flag">
               <i class="dropdown icon"></i>
                <span v-text="blogFlag"></span>
                <div class="menu" :style="isshow">
                  <div class="item" data-value="原创" @click="blogFlag='原创'">原创</div>
                  <div class="item" data-value="转载" @click="blogFlag='转载'">转载</div>
                  <div class="item" data-value="Tool" @click="blogFlag='Tool'">Tool</div>
                  <div class="item" data-value="翻译" @click="blogFlag='翻译'">翻译</div>
                </div>
            </div>
            <input type="text" name="title" placeholder="标题" v-model="blogTitle">
          </div>
        </label>
        <div class="required field">
          <v-md-editor height="800px" v-model="blogContent" ></v-md-editor>
        </div>
        <div class="two fields">
          <div class="required field">
            <div class="ui left labeled action input">
              <label class="ui compact teal basic label">分类</label>
              <div class="ui selection fluid dropdown"
                   :class="dropdownLabel" @click="changeShow">
                <input type="hidden" name="type.id" >
                <i class="dropdown icon"></i>
                <div :class="blogType.name ? 'text':'default text'" v-text="blogType.name"></div>
<!--                <div class="default text">分类</div>-->
                <div class="menu" :style="isshow">
                  <div v-for="type in typeList.data.type_item" class="item" :key="type.id" data-value="1"
                       v-text="type.type_name" @click="blogType.name=type.type_name"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="ui left labeled action input">
              <label class="ui compact teal basic label">标签</label>
              <div class="ui tag fluid multiple search selection dropdown"
                   :class="dropdownLabel" @click="changeShow">
                <input type="hidden" name="tagIds" th:value="*{tagIds}" >
                <input type="hidden" name="id" th:value="*{id}">
                <i class="dropdown icon"></i>
                <a v-for="tag in blogData.data.tags" :key="tag.id" class="ui label" data-value="5">
                  <span v-text="tag"></span>
                  <i class="delete icon" @click="deleteTag"></i>
                </a>
                <div class="menu" :style="isshow">
                  <div v-for="tag in tagList.data.tag_item" :key="tag.id" class="item" data-value="1"
                       th:data-value="${tag.id}" v-text="tag.tag_name"
                       @click="pushTag(tag.tag_name)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label class="required field">
          <div class="ui left labeled input">
            <label class="ui teal basic label">首图</label>
            <input type="text" name="firstPicture"
                   v-model="blogData.data.first_picture"
                   placeholder="首图地址,null则不显示图片。">
          </div>
        </label>

        <div class="required field">
          <textarea name="description" v-model="blogData.data.description" placeholder="博客描述..." maxlength="200"></textarea>
        </div>

        <div class="inline fields">
          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" id="recommend" name="recommend"
                     :checked="blogData.data.recommend" class="hidden">
              <label for="recommend">推荐</label>
            </label>
          </div>
          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" :checked="blogData.data.share_statement" id="shareStatement" name="shareStatement"
                     class="hidden">
              <label for="shareStatement">转载声明</label>
            </label>
          </div>
          <div class="field" style="padding-top:5px !important">
            <label class="ui checkbox">
              <input type="checkbox" id="appreciation" name="appreciation"
                     :checked="blogData.data.appreciation" class="hidden">
              <label class="float" for="appreciation" style="float:left">点赞人数：</label>
              <div id="appreciationCount"
                   v-text="blogData.data.appreciation_count==null ? '0':blogData.data.appreciation_count"
                   style="float:left"></div>
            </label>
          </div>
          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" id="commentabled" name="commentabled"
                     :checked="blogData.data.commentabled" class="hidden">
              <label for="commentabled">评论</label>
            </label>
          </div>
        </div>
        <div class="ui error message"></div>
        <div class="ui right aligned container">
          <button type="button" onclick="window.history.go(-1)" class="ui red button">返回</button>
          <button type="button" id="save-btn" class="ui secondary button" @click="save">保存</button>
          <button type="button" id="publish-btn" class="ui teal button" @click="publish">发布</button>
        </div>
      </form>
    </div>
  </div>
  <wbc-footer></wbc-footer>
</template>

<script>
import header from "@/components/admin/header";
import footer from "@/components/footer";
// import "../../../static/lib/editormd/css/editormd.min.css"
// import  "jquery"
// import {editormd} from "../../../static/lib/editormd/editormd.min.js"
/* eslint-disable*/
import {ref,reactive} from "vue"
import MarkdownEditor from "@/components/MarkdownEditor"
import {getBlogById} from "@/api/adminBlog";
import {useRoute} from "vue-router";
import {getTypeList} from "@/api/adminType";
import {getTagList} from "@/api/adminTag";

export default {
  name: "BlogsInput",
  setup(){
    let route=useRoute()
    let blogTitle=ref('标题')
    let blogFlag=ref('原创')
    let blogContent=ref('正文')
    let blogTags=reactive()
    let typeList=reactive({data:""})
    let tagList=reactive({data:""})
    let blogData = reactive({data: {
        title:"",
        content:"",
        type:"",
        tags:[],
        first_picture:"",
        description:"",
        recommend:false,
        share_statement:false,
        appreciation:false,
        commentabled:false,
        published:false
      },
    })
    let blog_id= null
    let blogType=reactive({name:""})
    if (route.path.match(/(\/blogs\/)(.*)(\/input)/)){
      console.log('blog exist');
      blog_id= ref(route.path.match(/(\/blogs\/)(.*)(\/input)/)[2])
      getBlogById(blog_id.value).then(res=>{
        console.log(res);
        blogData.data=res.data
        blogFlag.value=res.data.flag
        blogTitle.value=res.data.title
        blogContent.value=res.data.content
        blogType=reactive(res.data.type_id)
        // console.log(blogContent.value);
      })
    }else{
      blogType=reactive({name:''})
      console.log('new blog');
    }
    getTypeList().then(res=>{
      typeList.data=res.data
      console.log(res);
    })
    getTagList().then(res=>{
      tagList.data=res.data
      console.log(res);
    })
    function pushTag(e){
      blogData.data.tags.push(e)
      blogTags=reactive(blogData.data.tags)
    }
    function deleteTag(tagId){
      console.log(tagId);
      console.log("deleteTag");
    }
    function save(){
      blogData.data["published"]=false
      blogData.data["content"]=blogContent.value

      console.log("save", blogData);
    }
    function publish(){
      blogData.data["published"]=true
      blogData.data["content"]=blogContent.value
      console.log('publish',blogData);
    }
    console.log(blogType);
    return{
      blogData,
      blogFlag,
      blogTitle,
      blogContent,
      blogType,
      typeList,
      tagList,
      pushTag,
      deleteTag,
      save,
      publish,

    }
  },
  data(){
    return{
      text:"",
      menu:false,
      isshow:"",
      dropdownLabel:"",
      showMenu:false
    }
  },
  components: {
    "wbc-adminnav": header,
    "wbc-footer": footer,
    "editormd":MarkdownEditor
  },
  mounted() {

  },
  directives:{
    dpl:{
      bind(el){
        el.style.display = "none";
      }
    }
  },
  methods:{
    changeShow(){
      console.log("changeShow");
      this.showMenu=!this.showMenu
      if(this.showMenu){
        this.isshow={display:"block !important"}
        this.dropdownLabel=["active", "visible"]
      } else if(!this.showMenu){
        this.isshow={display:"none"}
        this.dropdownLabel=[]
      }
    }
  },
}

</script>

<style>
.v-md-textarea-editor textarea{
  height: 100% !important;
  max-height: 100% !important;
  min-height: 800px !important;
}
</style>