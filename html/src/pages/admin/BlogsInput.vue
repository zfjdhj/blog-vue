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
            <div class="ui selection compact teal basic dropdown label">
              <input type="hidden" value="原创" name="flag" th:value="*{flag}">
              <i class="dropdown icon"></i>
              <div class="text">原创</div>
              <div class="menu" >
                <div class="item" data-value="原创">原创</div>
                <div class="item" data-value="转载">转载</div>
                <div class="item" data-value="Tool">Tool</div>
                <div class="item" data-value="翻译">翻译</div>
              </div>
            </div>
            <input type="text" name="title" placeholder="标题" th:value="*{title}">
          </div>
        </label>
        <div class="required field">
          <label>
            <editormd></editormd>
<!--            <div id="md-content" style="z-index: 1 !important">-->
<!--                            <textarea placeholder="文章内容" name="content" style="display: none" th:text="*{content}==null ? ' [Tips]-->
<!-- #### 不支持的元素-->
<!-- - TeX排版 (基于 KaTeX);-->
<!-- - Emoji表情;-->
<!-- - 任务列表;-->
<!-- - 流程图和顺序图-->
<!-- - 支持HTML格式编码;-->
<!-- - 标签支持自定义添加标签，不能纯数字标签！！！':*{content}"></textarea>-->
<!--            </div>-->
          </label>
        </div>

        <div class="two fields">
          <div class="required field">
            <div class="ui left labeled action input">
              <label class="ui compact teal basic label">分类</label>
              <div class="ui selection fluid dropdown">
                <input type="hidden" name="type.id"  th:value="*{type}!=null ? *{type.id}">
                <i class="dropdown icon"></i>
                <div class="default text">分类</div>
                <div class="menu">
                  <div th:each="type : ${types}" class="item" data-value="1" th:data-value="${type.id}" th:text="${type.name}">分类1</div>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="ui left labeled action input">
              <label class="ui compact teal basic label">标签</label>
              <div class="ui tag fluid multiple search selection dropdown">
                <input type="hidden" name="tagIds" th:value="*{tagIds}" >
                <input type="hidden" name="id" th:value="*{id}">
                <i class="dropdown icon"></i>
                <div class="default text">标签</div>
                <div class="menu">
                  <div th:each="tag : ${tags}" class="item" data-value="1" th:data-value="${tag.id}" th:text="${tag.name}">前端</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label class="required field">
          <div class="ui left labeled input">
            <label class="ui teal basic label">首图</label>
            <input type="text" name="firstPicture" th:value="*{firstPicture}" placeholder="首图地址,null则不显示图片。">
          </div>
        </label>

        <div class="required field">
          <textarea name="description" th:text="*{description}" placeholder="博客描述..." maxlength="200"></textarea>
        </div>

        <div class="inline fields">
          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" checked id="recommend" name="recommend" th:checked="*{recommend}" class="hidden">
              <label for="recommend">推荐</label>
            </label>
          </div>
          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" checked id="shareStatement" name="shareStatement" th:checked="*{shareStatement}" class="hidden">
              <label for="shareStatement">转载声明</label>
            </label>
          </div>
          <div class="field" style="padding-top:5px !important">
            <label class="ui checkbox">
              <input type="checkbox" checked id="appreciation" name="appreciation" th:checked="*{appreciation}" class="hidden">
              <label class="float" for="appreciation" style="float:left">点赞人数：</label>
              <div id="appreciationCount" th:text="*{appreciationCount}==null ? '0':*{appreciationCount}" style="float:left">0</div>
            </label>
          </div>
          <div class="field">
            <label class="ui checkbox">
              <input type="checkbox" checked id="commentabled" name="commentabled" th:checked="*{commentabled}" class="hidden">
              <label for="commentabled">评论</label>
            </label>
          </div>
        </div>
        <div class="ui error message"></div>
        <div class="ui right aligned container">
          <button type="button" onclick="window.history.go(-1)" class="ui red button">返回</button>
          <button type="button" id="save-btn" class="ui secondary button">保存</button>
          <button type="button" id="publish-btn" class="ui teal button">发布</button>
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
import  "jquery"
// import {editormd} from "../../../static/lib/editormd/editormd.min.js"
/* eslint-disable*/
import MarkdownEditor from "@/components/MarkdownEditor"

export default {
  name: "BlogsInput", components: {
    "wbc-adminnav": header,
    "wbc-footer": footer,
    "editormd":MarkdownEditor
  }
}
//   mounted:function(){
//     this.test();
//   },
//   methods:{
//   test() {
//     $(function () {
//       /* eslint-disable*/
//       editormd("md-content", {
//         width: "100%",
//         height: 640,
//         syncScrolling: "single",
//         path: "/lib/editormd/lib/"
//       });
//     })
//   }
//   },
// }
</script>

<style scoped>

</style>