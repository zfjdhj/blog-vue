"""
 * @author  zfj
 * @date  2020/11/19 14:55
"""

<template>
  <!--中间内容-->
  <div class="custom-container-small custom-padded-tb-big">
    <div class="ui container">
      <div class="ui top attached segment">
        <!--头部-->
        <div class="ui horizontal link list">
          <div class="item">
<!--            <img src="../static/images/icon.png" th:src="@{${blog.user.avatar}}" alt="" class="ui avatar image">-->
            <div class="content"><a href="#" v-text="blogData.data.user_id" class="header"></a></div>
          </div>
          <div class="item">
            <i class="calendar alternate outline icon">
            </i>
            <span v-text="blogData.data.create_time"></span>
          </div>
          <div class="item"><i class="eye icon"></i><span v-text="blogData.data.views"></span></div>
        </div>
      </div>
      <div class="ui attached padding segment" v-if="blogData.data.first_picture !== 'null' && blogData.data.type_id !== 'Tool'">
        <!--图片区域-->
<!--        <img src="../static/images/800x400.jpg" th:src="@{${blog.firstPicture}}" alt="" class="ui rounded fluid image">-->
      </div>
      <div id="container" class="ui attached segment">
        <!--内容标题-->
        <div class="ui two column grid">
          <div class="ui left aligned basic column">
            <div class="ui teal basic label" v-text="typeName"></div>
          </div>
          <div class="ui right aligned basic column ">
            <div class="ui orange basic label" v-text="blogData.data.flag"></div>
          </div>
        </div>
        <h2 class="ui center aligned header" v-text="blogData.data.title"></h2>
        <br>
        <!--内容正文-->
        <div id="content" class="typo typo-selection js-toc-content custom-padded-lr-responsive custom-padded-tb-large"
             v-html="blogData.data.content"
             :class="blogData.data.type_id ==='Tool' ? '':'typo typo-selection js-toc-content custom-padded-lr-responsive custom-padded-tb-large'">
        </div>
        <!--标签-->
        <div class="custom-padded-top-big custom-padded-lr-responsive">
          <div class="ui basic teal left pointing label" v-for="tag in blogData.data.tags" :key="tag.id" v-text="tag.name"></div>
        </div>
        <!--点赞-->
        <div class="ui center aligned basic segment custom-padded-tb-small" style="margin-top: 0" th:if="${blog.appreciation}">
          <form name="appreciationCount" action="#" th:action="@{/blog/{id}(id=${blog.id})}" method="post" target="hiddenIFrame">
            <input type="hidden" name="id" th:value="${blog.id}">
            <input type="hidden" name="appreciate" th:value="${blog.appreciationCount}">
            <button id="zanButton" class="ui zan gray basic circular button" onclick="document.forms['appreciationCount'].submit();
document.getElementById('appreciationCount').innerHTML=parseInt(document.getElementById('appreciationCount').innerHTML)+1">
              <!--                            onclick="document.getElementById('appreciationCount').innerHTML=parseInt(document.getElementById('appreciationCount').innerHTML)+1-->

              <div class="item">
                <i class="heart icon"></i><span id="appreciationCount" th:text="${blog.appreciationCount}" >1</span>人点赞
              </div>
            </button>
          </form>
          <iframe style="display:none" name="hiddenIFrame" id="hiddenIFrame"></iframe>
          <div class="ui flowing popup transition hidden custom-padded-tiny" style="margin-bottom:0 ;">
            <div class="ui orange basic label">
              <div class="ui images" style="font-size: inherit !important;">
                感谢点赞，希望对你有所帮助。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui positive attached light teal message" th:if="${blog.shareStatement}">
        <!--相关信息-->
        <div class="ui middle aligned grid">
          <div class="ui eleven wide column">
            <ui class="list">
              <li>作者：<span th:text="${blog.user.nickname}">纸飞机</span></li>
              <li>更新时间：<span th:text="${#dates.format(blog.updateTime,'yyyy-MM-dd HH:mm')}">Date-time</span></li>
              <li>声明：未经原作者同意，一切内容禁止以各种形式转载。</li>
              <li>*如有内容侵权，联系管理员删除。</li>
            </ui>
          </div>
          <div class="ui five wide column">
<!--            <img src="../static/images/WeChat.png" th:src="@{/images/WeChat.png}" alt="" class="ui right floated rounded boarded image" style="width: 110px">-->
          </div>
        </div>
      </div>
      <div class="ui bottom attached segment" th:if="${blog.commentabled}">
        <!--留言展示区域-->
        <div id="comment-container" class="ui teal segment">
          <div th:fragment="commentList">
            <div class="ui threaded comments" style="max-width: 100%">
              <h3 class="ui dividing header">评论留言</h3>
              <div class="comment" th:each="comment : ${comments}">
                <a class="avatar">
<!--                  <img src="../static/images/icon.png" th:src="@{${comment.avatar}}" alt="">-->
                </a>
                <div class="content" style="">
                  <a class="author" >
                    <span th:text="${comment.nickname}">Matt</span>
                    <div class="ui mini basic teal left pointing label custom-padded-mini" th:if="${comment.adminComment}">博主</div>
                  </a>
                  <div class="metadata">
                    <span class="date" th:text="${#dates.format(comment.createTime,'yyyy-MM-dd HH:mm')}">Today at 5:42PM</span>
                    <!--评论删除-->
                    <a th:href="@{/comments/{blogId}/delete/{commentId}(blogId=${comment.blog.id},commentId=${comment.id})}" th:if="${userAdmin} ==1">评论删除</a>
                  </div>
                  <!--管理员评论-->
                  <div id="commentContent">
                    <div th:if="${comment.adminComment}" th:utext="${comment.content}" >
                      How artistic!
                    </div>
                  </div>
                  <!--普通评论-->
                  <div class="text" th:text="${comment.content}" th:unless="${comment.adminComment}">
                    How artistic!
                  </div>
                  <div class="actions">
                    <a class="reply" data-commentid="1" data-commentnickname="Matt"
                       th:attr="data-commentid=${comment.id},data-commentnickname=${comment.nickname}"
                       onclick="reply(this)">回复</a>
                  </div>
                </div>
                <div class="comments" th:if="${#arrays.length(comment.replyComments)}>0">
                  <div class="comment" th:each="reply : ${comment.replyComments}">
                    <a class="avatar">
<!--                      <img src="../static/images/icon.png" th:src="@{${reply.avatar}}" alt="">-->
                    </a>
                    <div class="content">
                      <a class="author">
                        <span th:text="${reply.nickname}">Matt</span>
                        <div class="ui mini basic teal left pointing label custom-padded-mini" th:if="${reply.adminComment}">博主</div>
                      </a>
                      <div class="metadata">
                        <span class="date" th:text="${#dates.format(reply.createTime,'yyyy-MM-dd HH:mm')}">Today at 5:42PM</span>
                        <!--评论删除-->
                        <a th:href="@{/comments/{blogId}/delete/{commentId}(blogId=${comment.blog.id},commentId=${reply.id})}" th:if="${userAdmin} ==1">评论删除</a>
                      </div>
                      <!--管理员回复-->
                      <div th:if="${reply.adminComment}">
                        回复<span th:text="|@${reply.parentComment.nickname}|" style="color: #00a1d6">@123</span>
                        :<span th:utext="${reply.content}">How artistic!</span>
                      </div>
                      <!--普通回复-->
                      <div class="text" th:unless="${reply.adminComment}">
                        回复<span th:text="|@${reply.parentComment.nickname}|" style="color: #00a1d6">@123</span>
                        :<span th:text="${reply.content}">How artistic!</span>
                      </div>
                      <div class="actions">
                        <a class="reply" data-commentid="1" data-commentnickname="Matt"
                           th:attr="data-commentid=${reply.id},data-commentnickname=${reply.nickname}"
                           onclick="reply(this)">回复</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--留言提交区域-->
        <div id="comment-form" class="ui form">
          <label>
            <input type="hidden" name="blog.id" th:value="${blog.id}">
            <input type="hidden" name="parentComment.id" value="-1">
          </label>
          <div class="field" th:id="${userAdmin}==1?'md-content':''">
            <textarea name="content" wrap="hard" placeholder="请输入评论信息" id="" cols="300" rows="10"></textarea>
          </div>
          <div class="fields custom-padded-tb">
            <label class="field custom-mobile-wide custom-margin-bottom-small">
              <div class="ui left icon input">
                <i class=" user icon"></i>
                <input type="text" name="nickname" placeholder="昵称" th:value="${session.user}!=null ? ${session.user.nickname}">
              </div>
            </label>
            <label class="field custom-mobile-wide custom-margin-bottom-small">
              <div class="ui left icon input">
                <i class="mail icon">
                </i>
                <input type="text" name="email" placeholder="联系方式" th:value="${session.user}!=null ? ${session.user.email}">
              </div>
            </label>
            <div class="field custom-mobile-wide custom-margin-bottom-small">
              <button id="commentpost-btn" type="button" class="ui teal button custom-mobile-wide">
                <i class="edit icon"></i>
                发布
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--右下角工具栏-->
  <div class="custom-padded custom-fixed custom-right-bottom">
    <div class="ui vertical icon buttons  ">
      <button type="button" class="ui teal button toc">目录</button>
      <a href="#comment-container" class="ui teal button">留言</a>
      <button type="button" class="ui teal button" th:classappend="${userAdmin}==1 ? 'tool':'login'" th:text="${userAdmin}==1 ? 'Tool':'登录'">Tool</button>
      <button class="ui qrcode icon button"><i class="qrcode icon"></i></button>
      <div id="toTop-button" class="ui icon button"><i class="chevron up icon"></i></div>
    </div>
  </div>
  <div class="ui toc-container flowing popup transition hidden" style="width: 250px">
    <ol class="js-toc custom-padded-lr-small"></ol>
  </div>
  <div class="ui tool-container flowing popup transition hidden custom-padded-mini" style="width: 70px">
    <div class="ui vertical icon buttons " style="padding:5px!important">
      <button type="button" class="ui mini teal button admin-tool1" th:text="${blog.published} ? '发布':'草稿'">草稿</button>
      <button type="button" class="ui mini teal button admin-tool2" th:class="${blog.recommend} ? 'ui mini teal button admin-tool2':'ui mini teal button admin-tool2 basic'">推荐</button>
      <button type="button" class="ui mini teal button admin-tool3" th:class="${blog.appreciation} ? 'ui mini teal button admin-tool3':'ui mini teal button admin-tool3 basic'">点赞</button>
      <button type="button" class="ui mini teal button admin-tool4" th:class="${blog.shareStatement} ? 'ui mini teal button admin-tool4':'ui mini teal button admin-tool4 basic'">声明</button>
      <button type="button" class="ui mini teal button admin-tool5" th:class="${blog.commentabled} ? 'ui mini teal button admin-tool5':'ui mini teal button admin-tool5 basic'">评论</button>
    </div>
  </div>
  <div class="ui wechat-qr flowing popup transition hidden custom-padded" id="qrcode" style="width: 130px !important;" >
  </div>
  <br>
  <br>
</template>


<!--<template>-->
<!--  <p>temBlog</p>-->
<!--</template>-->


<script>
import {getBlogById} from "@/api/home";
import {ref,reactive} from "vue"

import prismjs from "prismjs"

// import "../../static/lib/prism/prism.css"
// import "../../static/lib/tocbot/tocbot.min.js"
// import "../../static/lib/qrcode/qrcode.min.js"

export default {
  name: "temBlog",
  setup(props,context){
    // console.log(props);
    // console.log(context);
    let blogData=reactive({data:""})
    let id=ref(context.attrs.path.slice(6))
    /*防止出现bug*/
    let typeName=ref("")
    // console.log(id.value);
    getBlogById(id.value).then(res=>{
      blogData.data=res.data
      typeName.value=blogData.data.type_id.name
      console.log("blogData.data",blogData.data);
      // console.log("blogData.data.content",blogData.data.content);
      // let precode=blogData.data.content
      blogData.data.content=blogData.data.content.replace(/(<pre><code class=")/m,'<pre style="white-space: pre-wrap;"><code class="line-numbers ')

      prismjs.highlightAll()
    })
    return{
      blogData,
      typeName
    }

  },
  onMounted:{

  }
}
</script>

<style scoped>

</style>