<template>
  <div id="right-types" class="ui segments custom-show">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="idea icon"></i>分类
        </div>
        <div class="right aligned column">
          <router-link to="/types">more <i class="angle double right icon"></i></router-link>
        </div>
      </div>
    </div>
    <div  class="ui teal segment">
      <div class="ui fluid vertical menu">
        <a v-for="item in typeData.data.type_item" :key="item.id" href="#" th:href="@{/types/{id}(id=${type.id})}" class="item" th:each="type : ${types}">
          <span v-text="item.type_name"></span>
          <div class="ui teal basic left pointing label" v-text="item.blog_total"></div>
        </a>
      </div>
    </div>
  </div>
  <!--Tags-->
  <div id="right-tags" class="ui segments custom-show">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="tags icon"></i>标签
        </div>
        <div class="right aligned column">
          <router-link to="/tags">more <i class="angle double right icon"></i></router-link>
        </div>
      </div>
    </div>
    <div class="ui teal segment">
      <a v-for="item in tagData.data.tag_item" :key="item.id" href="#" th:href="@{/tags/{id}(id=tag.id)}" class="ui teal basic left pointing label custom-margin-tb-tiny" th:each="tag : ${tags}">
        <span v-text="item.tag_name"></span> <div class="detail" v-text="item.blog_total"></div>
      </a>
    </div>
  </div>
  <!--Recommend-->
  <div id="right-recommend" class="ui segments custom-show">
    <div class="ui secondary segment ">
      <i class="fire icon"></i>推荐!
    </div>
    <div v-for="item in recommendData.data.list" :key="item.id" class="ui segment" th:each="blog,iterStat : ${recommendBlogs}" th:classappend="${iterStat.count}==1 ? teal">
      <a href="#" th:href="@{/blog/{id}(id=${blog.id})}" class="custom-black custom-text-thin" v-text="item.title"></a>
    </div>
  </div>
  <!--Comment-->
  <div id="comment-container" class="ui segments custom-show">
    <div class="ui secondary segment ">
      <i class="comments icon"></i>最新评论!
    </div>
    <div v-for="item in commentData.data.list" :key="item.id" class="ui segment" th:each="comment,iterStat : ${comments}" th:classappend="${iterStat.count}==1 ? teal">
      <a class="ui header custom-black" style="font-size:16px" th:href="@{/blog/{id}(id=${comment.blog.id})}" v-text="item.blog_id.title"></a>
      <br>
      <span style="color: #4183c4" v-text="item.nickname"></span>
      <span v-if="item.parentComment != null">@</span>
      <span v-if="item.parentComment != null" th:text="${comment.parentComment.nickname}">someone</span>
      <span>:</span>
      <br>
      <span style="opacity: 0.7" v-html="item.content"></span>
      <br>
<!--      'yyyy-MM-dd HH:mm'-->
      <span v-text="item.create_time"></span>
    </div>
  </div>
  <!--Clipboard-->
  <div id="right-clipboard" class="ui segment custom-show">
    <div id="clipboard-form" class="ui segments form">
      <label>
        <input type="hidden" name="id" value="-1" th:value="${clipboard.id}">
      </label>
      <div class="ui secondary segment ">
        <div class="ui two column grid">
          <div class="column">
            <i class="copy icon"></i>剪贴板
          </div>
          <div class="right aligned column">
            <router-link to="/admin/clipboards">more <i class="angle double right icon"></i></router-link>
          </div>
        </div>
      </div>
      <div class="ui teal segment">
        <div class="field ui attached segment">
          <label class="ui transparent">
            <textarea class="custom-textarea" cols="30" id="clipboard-content" name="content" rows="10" th:text="${clipboard.content}"></textarea>
          </label>
        </div>
        <div class="ui middle aligned column grid">
          <div class=" five wide column">
            <button id="save-btn" type="button" class="ui teal basic small submit button custom-margin-top-small custom-padded-small">保存</button>
          </div>
          <div class="six wide column custom-padded-lr-small">
            <div class="ui middle aligned">AutoDel:</div>
            <span v-text="now"></span>
          </div>
          <div class="five wide right aligned column">
            <button id="clear-btn" type="reset" onclick="document.getElementById('clipboard-content').value=''" class="ui teal basic small button custom-margin-top-small custom-padded-small">清空</button>
          </div>
        </div>
      </div>
      <div class="ui success message" th:unless="${#strings.isEmpty(message)}">
        <i class="close icon"></i>
        <div class="header">提示：</div>
        <p th:text="${message}">操作成功</p>
      </div>
      <div id="clipboard-container">
        <div th:fragment="clipboardList">
          <div>
            <table id="clipboard-tb" class="ui table" style=" table-layout:fixed !important" >
              <thead>
              <tr>
                <th class="custom-padded-tb-small custom-padded-lr-tiny" style="width: 15%;text-align:center;">序列</th>
                <th id="nr" class="custom-padded-tb-small custom-padded-lr-small" style="width: 55%;text-align:center;">内容</th>
                <th id="cz" class="custom-padded-tb-small custom-padded-lr-small" style="width: 30%;text-align:center;">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in clipboardData.data.list" :key="item.id" th:each="clipboards,iterStat : ${clipboardPage}">
                <td v-text="index"></td>
                <td style="overflow: hidden;text-overflow:ellipsis;white-space:nowrap;" class="custom-padded-lr-small" th:title="${clipboards.content}">
                  <span id="content-1" class="ui custom-text-thin" th:attr="id=|content-${iterStat.count}|" v-text="item.content"></span>
                </td>
                <td class="custom-padded-lr-tiny" style="text-align:center;">
                  <button name="copy-btn" data-clipboard-target="#content-1" th:attr="data-clipboard-target=|#content-${iterStat.count}|"   class="copy-btn ui mini center aligned basic teal button custom-padded-small">Copy</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {getTypeTop,getTagTop,getRecommendTop,getCommentTop,getClipboardTop} from "@/api/home";
import {reactive} from "vue";

export default {
name: "temRightlist",
  setup(){
    /*
    * 获取type列表top
    * */
    let typeData=reactive({data:""})
    // console.log("page3",page.value)
    getTypeTop(5).then(res=>{
      typeData.data=res.data
      // console.log("page",blogData.data.page)
      console.log("typeData.data",typeData.data);
    })
    /*
    获取tag列表top
    * */
    let tagData=reactive({data:""})
    getTagTop(10).then(res=>{
      tagData.data=res.data
      // console.log("page",blogData.data.page)
      console.log("tagData.data",tagData.data);
    })
    /*
    * 获取推荐recommend列表top
    * */
    let recommendData=reactive({data:""})
    getRecommendTop(5).then(res=>{
      recommendData.data=res.data
      // console.log("page",blogData.data.page)
      console.log("recommendData.data",recommendData.data);
    })
    /*
    * 获取推荐recommend列表top
    * */
    let commentData=reactive({data:""})
    getCommentTop(5).then(res=>{
      commentData.data=res.data
      // console.log("page",blogData.data.page)
      console.log("commentData.data",commentData.data);
    })
    /*
    * 获取推荐recommend列表top
    * */
    let clipboardData=reactive({data:""})
    getClipboardTop(5).then(res=>{
      clipboardData.data=res.data
      // console.log("page",blogData.data.page)
      console.log("clipboardData.data",clipboardData.data);
    })
    return{
      typeData,
      tagData,
      recommendData,
      commentData,
      clipboardData,
    }
  },
  data(){

    return{
      now:this.timeStamp2String(new Date())
    }
  },
  methods:{
    timeStamp2String(time) {
      var datetime = new Date();
      datetime.setTime(time);
      var year = datetime.getFullYear();
      // var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 2;
      var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
      var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
      var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
      return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }
  },
  mounted(){
    let that = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      that.now =this.timeStamp2String(new Date()) ; // 修改数据date
      // console.log(that.now);
    }, 1000)
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style scoped>

</style>