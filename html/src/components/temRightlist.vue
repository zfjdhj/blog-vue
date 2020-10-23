<template>
  <div id="right-types" class="ui segments custom-show">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="idea icon"></i>分类
        </div>
        <div class="right aligned column">
          <a href="#" th:href="@{/types/-1}" target="_blank">more <i class="angle double right icon"></i></a>
        </div>
      </div>
    </div>
    <div class="ui teal segment">
      <div class="ui fluid vertical menu">
        <a href="#" th:href="@{/types/{id}(id=${type.id})}" target="_blank" class="item" th:each="type : ${types}">
          <span th:text="${type.name}">Type1</span>
          <div class="ui teal basic left pointing label" th:text="${#arrays.length(type.blogs)}">1</div>
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
          <a href="#" th:href="@{/tags/-1}" target="_blank">more <i class="angle double right icon"></i></a>
        </div>
      </div>
    </div>
    <div class="ui teal segment">
      <a href="#" th:href="@{/tags/{id}(id=tag.id)}" target="_blank" class="ui teal basic left pointing label custom-margin-tb-tiny" th:each="tag : ${tags}">
        <span th:text="${tag.name}">Tag1</span> <div class="detail" th:text="${#arrays.length(tag.blogs)}">1</div>
      </a>
    </div>
  </div>
  <!--Recommend-->
  <div id="right-recommend" class="ui segments custom-show">
    <div class="ui secondary segment ">
      <i class="fire icon"></i>推荐!
    </div>
    <div class="ui segment" th:each="blog,iterStat : ${recommendBlogs}" th:classappend="${iterStat.count}==1 ? teal">
      <a href="#" th:href="@{/blog/{id}(id=${blog.id})}" target="_blank" class="custom-black custom-text-thin" th:text="${blog.title}">Hot</a>
    </div>
  </div>
  <!--Comment-->
  <div id="comment-container" class="ui segments custom-show">
    <div class="ui secondary segment ">
      <i class="comments icon"></i>最新评论!
    </div>
    <div class="ui segment" th:each="comment,iterStat : ${comments}" th:classappend="${iterStat.count}==1 ? teal">
      <a class="ui header custom-black" style="font-size:16px" th:href="@{/blog/{id}(id=${comment.blog.id})}" th:text="${comment.blog.title}">blog.title</a>
      <br>
      <span style="color: #4183c4" th:text="${comment.nickname}">who</span>
      <span th:if="${comment.parentComment} != null">@</span>
      <span th:if="${comment.parentComment} != null" th:text="${comment.parentComment.nickname}">someone</span>
      <span>:</span>
      <span style="opacity: 0.7" th:utext="${comment.content}">what</span>
      <span th:text="${#dates.format(comment.createTime,'yyyy-MM-dd HH:mm')}">Date</span>
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
            <a href="#" th:href="@{/admin/clipboards}" target="_blank">more <i class="angle double right icon"></i></a>
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
            <span th:text="${#dates.format(clipboard.deleteTime,'yyyy-MM-dd')}">yyyy-MM-dd</span>
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
              <tr th:each="clipboards,iterStat : ${clipboardPage}">
                <td th:text="${iterStat.count}">1</td>
                <td style="overflow: hidden;text-overflow:ellipsis;white-space:nowrap;" class="custom-padded-lr-small" th:title="${clipboards.content}">
                  <span id="content-1" class="ui custom-text-thin" th:attr="id=|content-${iterStat.count}|" th:text="${clipboards.content}">test.content。阿U盾hi阿萨德hi爱是滴啊手段是滴啊送达</span>
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
export default {
name: "temRightlist"
}
</script>

<style scoped>

</style>